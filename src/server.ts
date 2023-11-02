import "./utils/processes";
import ServerClient from "./apps/server";
import listeners from "./MQ/listeners";
import logger from "./utils/logger";

export default class Server {
	public async start() {
		Promise.all([await listeners(), new ServerClient().start()]).then(
			() => {
				logger.info(`Process ${process.pid} is started`);
			}
		);
	}
}

new Server().start();
