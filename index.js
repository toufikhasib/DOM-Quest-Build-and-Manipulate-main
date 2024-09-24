document
	.getElementById("donate-noakhali-btn")
	.addEventListener("click", function (event) {
		event.preventDefault();

		const addInputField = getDonationInputField("noakhali-input-field");

		const donateText = getDonateTextField("noakhali-donate-amount");

		if (!isNaN(addInputField) && addInputField > 0) {
			const newNoakhaliTotal = donateText + addInputField;
			document.getElementById("noakhali-donate-amount").innerText =
				newNoakhaliTotal;
			const totalDonation = getDonateTextField("total-donate-amount");
			const newTotalDonation = totalDonation - addInputField;
			document.getElementById("total-donate-amount").innerText =
				newTotalDonation;
			// Show the modal instead of alert
			showDonationModal(addInputField);

			document.getElementById("noakhali-input-field").value = "";
			// add history
			const historyEntry = document.createElement("div");
			historyEntry.classList.add(
				"border-2",
				"p-4",
				"rounded-lg",
				"mb-4",
				"block"
			);

			const formattedDate = new Date().toLocaleDateString();
			historyEntry.innerHTML = `
			<p class="font-bold text-xl">${addInputField} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
			<p class="text-gray-600">Date: ${formattedDate}</p>
		`;
			// Append the history entry to the history section
			document.getElementById("history-section").appendChild(historyEntry);
		} else {
			alert("Please enter a valid donation amount.");
		}
	});
//
document.getElementById("donate-btn").addEventListener("click", function () {
	showSectionBy("donate-section");
});
document
	.getElementById("history-btn")
	.querySelector("button")
	.addEventListener("click", function () {
		showSectionBy("history-section");
	});
