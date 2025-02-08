function changeGift() {
	const giftDiv = document.getElementById("gift");
	const gifts = {
	  1: { emoji: "🌹", text:"7 Feb". "It's Rose Day" },
	  2: { emoji: "❤️", text:"8 Feb". "It's Propose Day" },
	  3: { emoji: "🍫", text:"9 Feb". "It's Chocolate Day" },
	  4: { emoji: "🧸", text:"10 Feb". "It's Teddy Day" },
	  5: { emoji: "🤝", text:"11 Feb". "It's Promise Day" },
	  6: { emoji: "🤗", text:"12 Feb". "It's Hug Day" },
	  7: { emoji: "💋", text: "13 Feb"."It's Kiss Day" },
	  8: { emoji: "💘", text: "14 Feb". "It's Valentine’s Day"},
	};
  
	const days = Object.keys(gifts);
	const randomDay = days[Math.floor(Math.random() * days.length)];
	const { emoji, text } = gifts[randomDay];
  
	giftDiv.innerHTML = `<span>${emoji}<span><p>${text}</p>`;
  }
  
  document.getElementById("cube").addEventListener("click", function () {
	this.classList.toggle("active");
	if (!this.classList.contains("active")) {
	  changeGift();
	}
  });
  
  document.addEventListener("DOMContentLoaded", function () {
	changeGift();
  
	const cube = document.getElementById("cube");
	cube.classList.add("active");
	setTimeout(() => {
	  cube.classList.remove("active");
	}, 3000);
  });
