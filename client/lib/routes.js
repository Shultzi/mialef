FlowRouter.route("/", {
	name: "home",
	action() {
		BlazeLayout.render("MainLayout");
	}
});

FlowRouter.route("/home", {
	name: "home",
	action() {
		BlazeLayout.render("MainLayout");
	}
});

FlowRouter.route("/Tries", {
	name: "Tries",
	action() {
		BlazeLayout.render("MainLayout", {
			main: "main"
		})
	}
});


// FlowRouter.route("/Card", {
// 	name: "Card",
// 	action() {
// 		BlazeLayout.render("MainLayout", {
// 			main: "Card"
// 		})
// 	}
// });

FlowRouter.route("/Cards", {
	name: "Cards",
	action() {
		BlazeLayout.render("MainLayout", {
			main: "Cards"
		})
	}
});

