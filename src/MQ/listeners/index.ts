import gameListeners from "./game.MQ";

async function listeners() {
	await gameListeners();
}

export default listeners;
