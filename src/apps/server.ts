import "../utils/processes";
import listeners from "../MQ/listeners";
import logger from "../utils/logger";

export default class Server {
	public start() {
		Promise.all([listeners()]).then(() => {
			logger.info(`Process ${process.pid} is started`);
		});
	}
}

new Server().start();
