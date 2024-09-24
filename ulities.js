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
	// No message change here, just show the modal
	modal.classList.remove("hidden");

	// Close the modal on button click
	document
		.getElementById("close-modal-btn")
		.addEventListener("click", function () {
			modal.classList.add("hidden");
		});
}

// Section showing functionality remains the same
document.getElementById("donate-btn").addEventListener("click", function () {
	showSectionBy("donate-section");
});

document
	.getElementById("history-btn")
	.querySelector("button")
	.addEventListener("click", function () {
		showSectionBy("history-section");
	});

// show button click function
function showSectionBy(id) {
	document.getElementById("donate-section").classList.add("hidden");
	document.getElementById("history-section").classList.add("hidden");
	document.getElementById(id).classList.remove("hidden");
}
//
