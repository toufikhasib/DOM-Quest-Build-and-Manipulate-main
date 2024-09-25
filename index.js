// noakhali donation section
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
			const now = new Date();
			const formattedDateTime = formatDateTime(now);

			historyEntry.innerHTML = `
    <p class="font-bold text-xl">${addInputField} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
    <p class="text-gray-600">Date: ${formattedDateTime} (Bangladesh Standard Time)</p>
`;
			// Append the history entry to the history section
			document.getElementById("history-section").appendChild(historyEntry);
		} else {
			alert("Invalid Donation amount");
			document.getElementById("noakhali-input-field").value = "";
		}
	});
//

// feni donation section
document
	.getElementById("donation-feni-btn")
	.addEventListener("click", function (event) {
		event.preventDefault();

		const addInputField = getDonationInputField("feni-input-field");

		const donateText = getDonateTextField("feni-donate-amount");

		if (!isNaN(addInputField) && addInputField > 0) {
			const newNoakhaliTotal = donateText + addInputField;
			document.getElementById("feni-donate-amount").innerText =
				newNoakhaliTotal;
			const totalDonation = getDonateTextField("total-donate-amount");
			const newTotalDonation = totalDonation - addInputField;
			document.getElementById("total-donate-amount").innerText =
				newTotalDonation;
			// Show the modal instead of alert
			showDonationModal(addInputField);

			document.getElementById("feni-input-field").value = "";
			// add history
			const historyEntry = document.createElement("div");
			historyEntry.classList.add(
				"border-2",
				"p-4",
				"rounded-lg",
				"mb-4",
				"block"
			);
			const now = new Date();
			const formattedDateTime = formatDateTime(now);
			historyEntry.innerHTML = `
    <p class="font-bold text-xl">${addInputField} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="text-gray-600">Date: ${formattedDateTime} (Bangladesh Standard Time)</p>
`;

			// Append the history entry to the history section
			document.getElementById("history-section").appendChild(historyEntry);
		} else {
			alert("Invalid Donation amount");
			document.getElementById("feni-input-field").value = "";
		}
	});

// injured donation section section
document
	.getElementById("injured-btn")
	.addEventListener("click", function (event) {
		event.preventDefault();

		const addInputField = getDonationInputField("injured-input-field");

		const donateText = getDonateTextField("injured-donated-amount");

		if (!isNaN(addInputField) && addInputField > 0) {
			const newNoakhaliTotal = donateText + addInputField;
			document.getElementById("injured-donated-amount").innerText =
				newNoakhaliTotal;
			const totalDonation = getDonateTextField("total-donate-amount");
			const newTotalDonation = totalDonation - addInputField;
			document.getElementById("total-donate-amount").innerText =
				newTotalDonation;
			// Show the modal instead of alert
			showDonationModal(addInputField);

			document.getElementById("injured-input-field").value = "";
			// add history
			const historyEntry = document.createElement("div");
			historyEntry.classList.add(
				"border-2",
				"p-4",
				"rounded-lg",
				"mb-4",
				"block"
			);
			const now = new Date();
			const formattedDateTime = formatDateTime(now);

			historyEntry.innerHTML = `
  	  		<p class="font-bold text-xl">${addInputField} Taka is Donated for Aid for Injured in the Quota Movement</p>
 			 <p class="text-gray-600">Date: ${formattedDateTime} (Bangladesh Standard Time)</p>
			`;
			// Append the history entry to the history section
			document.getElementById("history-section").appendChild(historyEntry);
		} else {
			alert("Invalid Donation amount");
			document.getElementById("injured-input-field").value = "";
		}
	});

// button click function
document.getElementById("donate-btn").addEventListener("click", function () {
	showSectionBy("donate-section");
});
document
	.getElementById("history-btn")
	.querySelector("button")
	.addEventListener("click", function () {
		showSectionBy("history-section");
	});
// button click backgroun color add
document.getElementById("donate-btn").addEventListener("click", function () {
	document.getElementById("donate-btn").style.backgroundColor =
		"rgb(180, 244, 97)";
	document
		.getElementById("history-btn")
		.querySelector("button").style.backgroundColor = "";
});

document
	.getElementById("history-btn")
	.querySelector("button")
	.addEventListener("click", function () {
		document
			.getElementById("history-btn")
			.querySelector("button").style.backgroundColor = "rgb(180, 244, 97)";
		document.getElementById("donate-btn").style.backgroundColor = "";
	});
