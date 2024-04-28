# NestJS Scalable Long-Polling Server

This project demonstrates how to build a scalable and reliable long-polling server using NestJS. It includes a setup for testing with a mock client, allowing you to simulate client behavior and server responses effectively.

## Features

- **NestJS Framework**: Leveraging the modern, TypeScript-based framework for building efficient server-side applications.
- **Scalable Architecture**: Designed to scale horizontally across multiple server instances.
- **Client Testing**: Includes a mock client setup for testing server responses.

## Prerequisites

To run this project, you will need:

- Node.js (v20.x or later)
- TypeScript and ts-node installed globally (for running TypeScript files directly)
- A local or remote NestJS setup
- pnpm (v9.x or later)

## Installation

### Clone the Repository

```bash
git clone https://github.com/truongtrancs/nest-long-polling.git
cd nest-long-polling
```

### Install Dependencies

```bash
pnpm install
```

## Running the Application

### Start the Server

```bash
pnpm start:dev
```

### Run the Mock Client

```bash
cd mock-client
ts-node client.ts
```

## Usage

### Poll for Updates

Clients can poll for updates by sending a GET request to

http://localhost:3000/polling/{clientId}

Replace {clientId} with the actual ID of the client you wish to poll.

### Notify a Specific Client

To notify a specific client with data, send a POST request to

http://localhost:3000/polling/{clientId}/notify

with a JSON payload:

```json
{
  "message": "Your specific message or data here"
}
```

Replace {clientId} with the actual ID of the client you wish to notify.

## Contributing

Contributions to this project are welcome! To contribute, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

Thanks to all contributors who have invested their time in improving this project.
Appreciation for the NestJS community for providing extensive support and resources.
