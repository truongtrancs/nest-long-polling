import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PollingService } from './polling.service';

@Controller('polling')
export class PollingController {
  constructor(private readonly pollingService: PollingService) {}

  @Get(':clientId')
  async poll(
    @Param('clientId') clientId: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    req.on('close', () => {
      this.pollingService.removeRequest(clientId);
      console.log(`Client disconnected, client ID: ${clientId}`);
    });
    req.on('error', (err) => {
      this.pollingService.removeRequest(clientId);
      console.error(`Client has error, client ID: ${clientId}`, err);
    });

    this.pollingService.addRequest(clientId, res);
  }

  @Post(':clientId/notify')
  async notify(@Param('clientId') clientId: string, @Body() data: any) {
    const waitingRequest = this.pollingService.getRequest(clientId);
    if (!waitingRequest) {
      return;
    }
    waitingRequest.response.status(200).send({ clientId, ...data });
    this.pollingService.removeRequest(clientId);
  }
}
