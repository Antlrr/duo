Events.on(ClientLoadEvent, b  => {
Vars.content.each(e => {
if(!e.region) return;
if(!e.fullIcon) return;
if(!e.uiIcon) return;
if(!e.rotatorRegion) return;
e.region = Blocks.duo.region;
e.fullIcon = Blocks.duo.region;
e.uiIcon = Blocks.duo.region;
e.rotatorRegion = Blocks.duo.region;
});});
//script by SMOLKEYS lol
