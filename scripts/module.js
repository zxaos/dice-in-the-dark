const sysid="ditd"
const colorid="blades-orange"

Hooks.on('diceSoNiceReady', (dsn) => {
	dsn.addSystem({id: sysid, name: "Blades in the Dark"}, "preferred");

	dsn.addDicePreset({
		type: "d6",
		labels: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"!"
		],
		system: sysid,
		colorset: colorid,
		font: sysid
	});

	dsn.addColorset({
			name: colorid,
			description: "Blades Orange",
			category: "Blades in the Dark",
			foreground: "#e9630d",
			background: "#595e5f",
			outline: "#ce4502",
			edge: "#8f8f8f",
			texture: "metal",
			material: "metal",
			font: sysid,
			fontScale: {
				"d2":1.38,
				"d6":1.8
			}
		},
		"preferred"
	);
});
