// comment shared function add
function getDonationInputField(id) {
	const addDonation = document.getElementById(id).value;
	const addDonationNumber = parseFloat(addDonation);
	return addDonationNumber;
}
function getDonateTextField(id) {
	const donateText = document.getElementById(id).innerText;
	const donateNumber = parseFloat(donateText);
	return donateNumber;
}
// Show the modal with the donation amount
function showDonationModal() {
	const modal = document.getElementById("donation-modal");
	modal.classList.remove("hidden");
	document
		.getElementById("close-modal-btn")
		.addEventListener("click", function () {
			modal.classList.add("hidden");
		});
}
// show the else custom alert

// show button click function
function showSectionBy(id) {
	document.getElementById("donate-section").classList.add("hidden");
	document.getElementById("history-section").classList.add("hidden");
	document.getElementById(id).classList.remove("hidden");
}
//show time function
function formatDateTime(date) {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		timeZone: "Asia/Dhaka",
		timeZoneName: "short",
	};

	return date.toLocaleString("en-US", options);
}
