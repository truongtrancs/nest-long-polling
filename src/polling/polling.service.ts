import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class PollingService {
  private requests: Map<
    string,
    { response: Response; timeout: NodeJS.Timeout }
  > = new Map();

  constructor(private configService: ConfigService) {}

  addRequest(id: string, response: Response) {
    const timeout = setTimeout(() => {
      response.status(204).send(); // Send no content if timeout occurs
      this.removeRequest(id); // Cleanup the request
    }, this.configService.get<number>('timeout')); // Timeout after 30 seconds

    this.requests.set(id, { response, timeout });
  }

  getRequest(id: string): { response: Response; timeout: NodeJS.Timeout } {
    return this.requests.get(id);
  }

  removeRequest(id: string) {
    const request = this.requests.get(id);
    if (request) {
      clearTimeout(request.timeout); // Ensure to clear timeout when removing request
      this.requests.delete(id);
    }
  }
}
