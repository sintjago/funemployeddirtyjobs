/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Bat Cave Scavenger','Worm Dung Farmer','Roadkill Cleaners','Chinatown Garbage Collector','Sewer Inspector','Pig Farmer','Chick Sexer','Vexcon','Sludge Cleaner','Hot Tar Roofer','Ostrich Farmer','Cheese Maker','Shrimper','Bio-Diesel-Man','Micro Algae Man','Chimney Sweeper','Avian Vomitologist','Turkey Farmer','Alligator Farmer','Mushroom Farmer','Plumber','Termite Controller','Casino Food Recycler','Garage Pit Technician','Parade Float Dismantler','Skull Cleaner','Geoduck Farmer','Fuel Tank Cleaner','Shark Tagging and Necropsy','Hoof Cleaner','Alpaca Shearer','Monkey Caretaker','Snake Researcher','Penguin Keeper','Bell Maker','Mosquito Control Officer','Coal Miner','Bug Breeder','Poo Pot Maker','Mule Logger','Well Digger','Cave Digger','Salt Miner','Wine Maker','Steam Ship Cleaner','Billboard Installer','Snake Wrangler','Leather Tanner','Bridge Painter','Fish Farmer','Alligator Egg Collector','Wild Goose Chaser','Special Effect Artist','Reef Ball Maker','Exotic Animal Keeper','Spray Insulation Technician','Sheep Castrator','Diaper Cleaner','Bologna Maker','Abandoned Mine Plugger','Animal Rendering','Goose Down Plucker','Spider Pharm','Locomotive Builder','Sled Dog Breeder','Leech Trapper','Mannequin Factory Worker','Egg Farmer','Hop Harvesting','Parchment Maker','Maggot Farmer','Gourd Maker','Mattress Recycler','High-Rise Window Washer','Toilet Crusher','Camel Rancher','Tofu Maker','Glass Maker','Dam Engineer','Reindeer Farm','Marble Maker','Fireworks Technician','Worm Grunter','Maple Syrup Maker','Animal Control Specialist','Cricket Farmer','Chicken Buster','Lake Lock Technician','Concrete Finisher','Cow Bone Processing Plant Worker','Cleaning Coastal Buoys','Checking Mine Depth','Under Home Insulator','Exotic Animal Breeder','Stand-In Fugitive','Ice Road Tucker','Invasive Species Management','Sea Lamprey Exterminator','Shark Aquarium Cook','Corn Mill Worker','Animal Relocation','Lightning Rod Installer','Woolen Mill Operator','Pinsetter Mechanic','Day Spa Waxer','Bug Detective','Horse Tester','Custom Meat Processor','Dumpster Seagull Remover','Date Palm Pollenator','Asphalt Paver','Rum Distiller','School Children Lice Manager (Hair Fairy)','Electric Pylon Replacer','Scrapple Maker','Blueberry Harvest Specialist','Jelly Bean Flavor Developer','Sponge Diver / Collector','Cedar Log Peeler','Fish Processing at the Bering Sea','Wood Processor at Rustic Mill','Termite Researcher & Remover','Crayfish Pickers','DNA Analyst','Crocodile Hunter','Crab Fishing (Deadliest Catch)','Opal Miner','Jellyballing (Cannonball Jellyfish Harvester)','Epoxy Floor Installer','Wood Fracker','Tugboat Fitter','Water Tower Cleaner','Rock Sucker','Mountain Carver','Hockey Arena Cleaner','Combat Trauma Surgeon','Florida Iguana Controller / Hunter'];
var jobs_used = [];
var quals = ['Spaceship','Merit Badge','Confession','Black Hole','Ambidextrous','Peg Leg','Dragon','Box Wine','Social Media Profile','Utility Belt','Born on the Streets','Fear','Expert','Emotionally Hollow','Student Loans','Box','Open','Sob Story','Secret Identity','Deep','Decoder Ring','Shady','Cape','Chocolate','Monocle','Brass Knuckles','Filter','Room to Grow','Extra Credit','Rock','The Perfect Alibi','Boomerang','Recess','Sneaky','Diplomatic Immunity','Australian Accent','Conviction','No Sense of Humor','German Accent','Self-Respect','Minivan','Film','British Accent','False Teeth','Soundproof Room','Spirit','Survival Skills','Katana','A Dollar','Cane','Drive','Evil Laugh','Daddy Issues','Sloth','Handlebar Moustache','Fancy Hat','Unstable','Million Dollar Smile','Nunchucks','Grit','Mind Reader','Sawed-Off Shotgun','Utterly Adorable','License','Cant Lie','Scissors','Field Experience','Wings','Camera','Medicine','Sees Dead People','Black Belt','Soft Voice','Treats','Night Vision','Genetically Engineered','Soft Hands','Jet Packs','Hook','Russian Accent','Can Defuse Bombs','Cant Feel','Scalpel','Nothing Left to Lose','Happy Ending','Pride','Envy','Communes with Fish','Tip','Stool','Poker Face','Sidekick','Candy','Mace','Short Attention Span','Scented Candle','Flaming Sword','Indecisive','Pyromaniac','Apples','Firebreathing','Online Dating Profile','Three-Piece Suit','Day Job','Crystal Ball','Consolation Prize','Passive Agressive','A.I.','Rain','Fifty Tattoos','Rum','Work Ethic','Experiments','Sports Car','Walker','Trust Fund','Devils Advocate','1%','Time Machine','Jazz Hands','Every Problem Ever','Ripped','Associates Degree','Cold Black Heart','Claw','No Sense of Smell','Shed','Really Bad Aim','Heights','Southern Accent','Poor Judgment','Magic Wand','Greed','Patient','Hoverboard','God Complex','Slender Frame','Swag','Invisible Ink','Combover','Chain','Treasure','Uncontrollable Gas','Blunt','Gag Reflex','Excuses','Decency','The Antidote','Beard','Hot Mess','Nice Things','Hocus Pocus','Privilege','Camouflage','X-ray Vision','Nutcracker','Fifty Cats','Foam Sword','Shallow','Self-Entitled','Trench Coat','Sweat','Boats','Fairy Dust','Private Jet','Tight Quarters','Italian Accent','Sheltered','Yoga Pants','Club','Brick','Piece of Cake','Package','Gluttony','Apocalypse','Minion','Emotionally Unstable','Online Degree','Bad Luck','French Accent','Hallucinogens','Pathological Liar','Game Tester','Organic','Files','Captain','Coat Hanger','Hears Voices'];
var quals_used = [];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(){
	if(quals.length === 0){
		quals = quals.concat(quals_used);
		quals_used = [];
	}
	var index = Math.floor(Math.random() * quals.length); //random var
	var result = quals[index]; //returns result later
	quals_used = quals_used.concat(quals.splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

