// Open Settings
     function openSettings() {
     document.getElementById("settings").style.display = "block";
     }
      
     // Close Settings
     function closeSettings() {
     document.getElementById("settings").style.display = "none";
     }
     
     // Save tab name to localStorage
     function changeTabName() {
     var tabName = document.getElementById("tabName").value;
     document.title = tabName;
     localStorage.setItem("tabName", tabName);
     }

     // Save tab icon to localStorage
     function changeTabIcon() {
     var tabIcon = document.getElementById("tabIcon").value;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabIcon", tabIcon);
     }
     
     // Change tab favicon
     function changeTabFavicon(iconUrl) {
     var link = document.querySelector("link[rel~='icon']");
     if (!link) {
     link = document.createElement('link');
     link.rel = 'icon';
     document.getElementsByTagName('head')[0].appendChild(link);
     }
     link.href = iconUrl;
     localStorage.setItem("tabIcon", iconUrl);
     }

     // Load tab name and icon from localStorage
     window.onload = function() {
     var savedTabName = localStorage.getItem("tabName");
     var savedTabIcon = localStorage.getItem("tabIcon");
     if (savedTabName) {
     document.title = savedTabName;
     }
     if (savedTabIcon) {
     changeTabFavicon(savedTabIcon);
        }
     }
     
document.getElementById("Google").onclick = function() {
     var tabTitle = "Google";
     var tabIcon = "https://www.google.com/favicon.ico";
     document.title = tabTitle;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabName", tabTitle);
     localStorage.setItem("tabIcon", tabIcon);
     };
                            
     document.getElementById("Google Drive").onclick = function() {
     var tabTitle = "My Drive - Google Drive";
     var tabIcon = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
     document.title = tabTitle;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabName", tabTitle);
     localStorage.setItem("tabIcon", tabIcon);
     };
     
     document.getElementById("Google Docs").onclick = function() {
     var tabTitle = "Untitled document - Google Docs";
     var tabIcon = "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x64.png";
     document.title = tabTitle;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabName", tabTitle);
     localStorage.setItem("tabIcon", tabIcon);
     };
      
     document.getElementById("Google Slides").onclick = function() {
     var tabTitle = "Untitled presentation - Google Slides";
     var tabIcon = "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_presentation_x64.png";
     document.title = tabTitle;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabName", tabTitle);
     localStorage.setItem("tabIcon", tabIcon);
     };
     
     document.getElementById("Google Classroom").onclick = function() {
     var tabTitle = "Home";
     var tabIcon = "https://ssl.gstatic.com/classroom/favicon.png";
     document.title = tabTitle;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabName", tabTitle);
     localStorage.setItem("tabIcon", tabIcon);
     };
                              
     document.getElementById("Gmail").onclick = function() {
     var tabTitle = "Inbox (2103)";
     var tabIcon = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico";
     document.title = tabTitle;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabName", tabTitle);
     localStorage.setItem("tabIcon", tabIcon);
     };
     
     document.getElementById("ChattyWebsite").onclick = function() {
     var tabTitle = "ChattyWebsite";
     var tabIcon = "https://i.imgur.com/PQhhSgy.png";
     document.title = tabTitle;
     changeTabFavicon(tabIcon);
     localStorage.setItem("tabName", tabTitle);
     localStorage.setItem("tabIcon", tabIcon);
     };
     
     // Open in about:blank
     document.getElementById("aboutBlank").onclick = function() {
     var win = window.open('');
     win.document.open();
     win.document.write(document.documentElement.outerHTML);
     win.document.title = "about:blank";
     win.document.close();
     window.parent.window.location.replace('https://classroom.google.com/')
     };
     
     // Open in blob:
     function createBlobUrl() {
     var outerHTML = document.documentElement.outerHTML;
     var blob = new Blob([outerHTML], {
     type: 'text/html'
     });
     var blobUrl = URL.createObjectURL(blob);
     var newTab = window.open();
     newTab.document.write('<!DOCTYPE html><html><head><title>Page Content</title></head><body></body></html>');
     newTab.document.close();
     newTab.location.href = blobUrl;
     }


document.addEventListener("DOMContentLoaded", function() {
      var phrases = [
        "Chatty changed these lol",
        "Maybe this will update... or not",
        "Waiter, can I have a cheeseburger without cheese? -Oh, so you want a hamburger? No, I want a cheeseburger without cheese. -That's a hamburger. No it's not! I said I wanted a cheeseburger without cheese, so give me a cheeseburger without cheese! -One hamburger, coming riiight up. I said a cheeseburger without cheese!",
        "Play Eaglercraft 1.12",
        "chicken jockey",
        "tralalero tralala",
        "Play Blackjack Casino",
        "'Youre naaasty' -Favian 2025",
        "'How do I kill the creaking in minecraft? When I hit it, it just sprays dandruffs everywhere.' -Avitesh 2025",
        "Frickelty frackelty, towards your computer approaches a tragedy! (its 30 tabs)",
        "'Lock in' - Mr. B",
        "MINIGAMES!",
        "mfw ive been caught cheating on tests 10 times, used ai for every school essay, and get an F on everything: :D",
        "huh",
        "not",
        "You're so COOL!",
        "Snuck some gum into class 😎",
        "I'll be needing extra baking soda. And soda. A lot of soda.",
        "I caught you sitting for too long. Do 25 push-ups NOW!",
        "forgot my charger",
        "im at 20%",
        "OfficialBarneyPlayz is cool",
        "if someone snitches on this again istg",
        "This webpage has been blocked with sheer determination!",
        "School really tried 💀",
        ":3",
        "I like crocodiles",
        "Am I suspicious?",
        "Am I deemed to be sus?",
        "NTCatGamer is really brainrot",
        "gemini sucks",
        "ibeatkids.com",
        "For this experiment, we'll be needing lots of teachers...",
        "roblox is cringe",
        "ipads suck",
        "minecraft movie is mid",
        "laptops are better then ipads",
        "Made by Chattyice",
        "every time you press ctrl + shift + q + q you get $100",
        "splash message",
        "I had a really cool/funny one but I forgot. sorry :(",
        "Changing your passwords...",
        "ᕙ(⇀‸↼‶)ᕗ",
        "(・o・)",
        "¯\_( ͡° ͜ʖ ͡°)_/¯",
        "(╯°□°）╯︵ ┻━┻",
        "(╯ರ ~ ರ)╯︵ ┻━┻",
        "(ノಥ,_｣ಥ)ノ彡┻━┻",
        "That's my class",
        "Wh- Where's the school bus?",
        "I got caught again",
        "stop skidding my site 😤",
        "choochoo",
        "what was your score?",
        "'Mark *********, please report to the office.' Aw, what ah do now?",
        "This is insane guys",
        "It looks easier than it looks",
        "chromebooks are trash",
        "bros getting 30 fps",
        "i woke up in a new bugatti",
        "goguardian is not my guardian",
        { type: "image", src: 'https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20190121140627/Minecraft-Creeper-Head.jpg' },
        { type: "image", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkWYA2wiktf23Fz20KoF8W7ZH35EoOFT-fQ&s' },
        { type: "image", src: 'https://i.imgur.com/bxcvkh5.jpeg' },
      ];

      var randomIndex = Math.floor(Math.random() * phrases.length);
     var randomPhrase = phrases[randomIndex];
     var phraseElement = document.getElementById("randomPhrase");
     phraseElement.textContent = randomPhrase;
     if (randomPhrase.type === "image") {
     phraseElement.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: 30%;">`;
     }
     function changeText() {
     const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
     if (typeof randomPhrase === "string") {
     phraseElement.textContent = randomPhrase;
     } else if (randomPhrase.type === "image") {
     phraseElement.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: 30%;">`;
        }
     }
     phraseElement.addEventListener('click', changeText);
     });

    function search_button() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('button');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="inline";				
		}
	}
}

    document.getElementById("launchGames").onclick = function() {
      document.body.innerHTML = "<h7>Loading...<h7>";
      setTimeout(function() {
        document.body.innerHTML = "";
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Games 🔍'>"; 
        var games = [
            { name: "Pandemonium Minigame", url: "https://redtide-stack.github.io/Pandemonium-Minigame-fork/" },
            { name: "Block Fist Games", url: "https://blockfistgames2.weebly.com/" },
            { name: "Eaglercraft 1.12 (REAL)", url: "https://eaglercraft.com/mc/1.12.2-wasm/" },
            { name: "EaglyMC (Minecraft)", url: "https://eaglymc.com/" },
            { name: "Minecraft (1.5)", url: "https://sd592g.github.io/zj684od4lfg/" },
            { name: "Eaglercraft Server List", url: "https://servers.eaglercraft.com/" },
            { name: "Minecraft 1.8", url: "https://eaglercraft.com/mc/1.8.8-wasm/" },
            { name: "Minecraft (1.9)", url: "https://d272xss3wq00xu.cloudfront.net/1-9.html" },
            { name: "Minecraft (1.11)", url: "https://d272xss3wq00xu.cloudfront.net/1-11.html" },
            { name: "Resent Client Eagler (1.8)", url: "https://reslauncher4.vercel.app" },
            { name: "Starlike Client Eagler (1.16)", url: "https://starlike.zumbiepig.dev/" },
            { name: "Eaglercraft (1.20)", url: "https://dfs3rzq44v6as.cloudfront.net/?frame=fullscreen/#/lessons/964c4358-60a7-4121-908e-63f6ae6e5ef0" },
            { name: "Roblox (Easyfun.gg)", url: "https://www.easyfun.gg/games/roblox.html" },
            { name: "Roblox (Now.gg)", url: "https://pathetic-roblox-main.vercel.app/" },
            { name: "Tortilla Games", url: "https://dfs3rzq44v6as.cloudfront.net"},
            { name: "Ultraviolet", url: "https://dfs3rzq44v6as.cloudfront.net/#/prxy" },
            { name: "Five Nights At Winston's", url: "https://g.deev.is/fnaw" },
            { name: "1 (Reversed 2048)", url: "https://d272xss3wq00xu.cloudfront.net/2048/index.html" },
            { name: "Bottle Flip 3D", url: "https://d272xss3wq00xu.cloudfront.net/bottle-flip-3d/index.html" },
            { name: "Neal.fun", url: "https://neal.fun" },
            { name: "Subway Surfers", url: "https://dddavit.github.io/subway/" },
            { name: "Slope", url: "https://mathadventure1.github.io/slope/slope/index.html" },
            { name: "Slope 2", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Slope%202" },
            { name: "Slope 3", url: "https://slope3.com/" },
            { name: "Cookie Clicker", url: "https://eli-schwartz.github.io/cookieclicker/" },
            { name: "Drive Mad", url: "https://ubg365.github.io/drive-mad/play.html" },
            { name: "Drive Mad (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/drivemad/index.html" },
            { name: "Drive Mad Mod", url: "https://play.fancade.com/63BA239C20C40BF3" }, 
            { name: "BitLife", url: "https://ubg365.github.io/bitlife-life-simulator/play.html" },
            { name: "Ztype", url: "https://zty.pe" },
            { name: "3kh0.github.io (ad spammy)", url: "https://3kh0.github.io" },
            { name: "Hover Racer Drive", url: "https://ubg365.github.io/hover-racer-drive/" },
            { name: "Monkey Mart", url: "https://ubg365.github.io/monkey-mart/play.html" },
            { name: "Drift Boss", url: "https://ubg365.github.io/drift-boss/" },
            { name: "Madalin Stunt Cars 2", url: "https://ubg100.github.io/games/Madalin/index.html" },
            { name: "Breaking the bank", url: "https://mountain658.github.io/zbreakingthebank.html" },
            { name: "Escaping the prison", url: "https://mountain658.github.io/zescapetheprison.html" },
            { name: "Stealing the diamond", url: "https://mountain658.github.io/zstealingthediamond.html" },
            { name: "Infiltrating the airship", url: "https://sz-games.github.io/games/Flash.html?game=/games/henry-airship/infiltratingtheairshipgame.swf" },
            { name: "Fleeing the complex", url: "https://sz-games.github.io/games/Flash.html?game=https://sz-games.github.io/Games6/Henry%20Stickmin%20-%20Fleeing%20the%20Complex.swf?raw=true" },
            { name: "Free Rider", url: "https://freeriderhd.com" },
            { name: "Run 3", url: "https://lekug.github.io/tn6pS9dCf37xAhkJv/" },
            { name: "Bloxorz", url: "https://ad-freegames.github.io/flash/game/bloxorz.html" },
            { name: "Drift Hunters", url: "https://htmlxm.github.io/h/drift-hunters/" },
            { name: "Venge.io", url: "https://venge.io/" },
            { name: "Highway Racer Pro", url: "https://unblocked-games.s3.amazonaws.com/highway-racer-pro.html" }, 
            { name: "Hole.io", url: "https://hole-io.com/" },
            { name: "Drift Hunters 2024", url: "https://unblocked-games.s3.amazonaws.com/drift-hunters-2024.html" },
            { name: "Webcraft", url: "https://jesgran.is-a.dev/webcraft/" }, 
            { name: "Sandspiel Studio", url: "https://studio.sandspiel.club" },
            { name: "Blackjack Casino", url: "https://www.yurk.com/games/black/" },
            { name: "FNAF", url: "https://ubg77.github.io/fix/fnaf1/" },
            { name: "Krunker.io", url: "https://krunker.io/" },
            { name: "Tomb of the mask", url: "https://mountain658.github.io/g/tombofthemask/index.html" },
            { name: "worldguessr", url: "https://www.worldguessr.com/" },
            { name: "World's Hardest Game", url: "https://mountain658.github.io/zworldsHardestGame.html" },
            { name: "MinecraftSkins.net", url: "https://minecraftskins.net" },
            { name: "Skindex", url: "https://skindex.pro" },
            { name: "Mr. Bullet", url:"https://www.yurk.com/games/mrbullet/" },
            { name: "Sandspiel", url: "https://sandspiel.club" },
            { name: "Slow Roads", url: "https://slowroads.io" },
            { name: "Backrooms", url: "https://adfree3kh0.github.io/projects/backrooms/index.html" },
            { name: "Impossible Quiz", url: "https://adfree3kh0.github.io/projects/impossiblequiz/index.html" },
            { name: "Among Us Singleplayer", url: "https://adfree3kh0.github.io/projects/among-us/index.html" }, 
            { name: "Bad Piggies", url: "https://www.friv.cm/bad-piggies/fullscreen/" },
            { name: "Cluster Rush",  url: "https://duckmath.org/g4m3s/cluster-rush.html" },
            { name: "Crossy Road", url: "https://selenite.cc/semag/crossyroad/index.html" },
            { name: "Crossy Road (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/crossyroad/index.html" },
            { name: "1v1.lol", url: "https://selenite.cc/semag/1v1lol/index.html" },
            { name: "Bloxd.io", url: "https://bloxd.io" },
            { name: "CubeRealm.io", url: "https://cuberealm.io/" },
            { name: "Aim Trainer", url: "https://aimtrainer.io/" },
            { name: "Scrap Metal 1", url: "https://www.gamearter.com/game/scrap-metal/" },  
            { name: "Scrap Metal 2", url: "https://www.gamearter.com/game/scrap-metal-2/" },
            { name: "Scrap Metal 3", url: "https://adfree3kh0.github.io/projects/scrapmetal/index.html" },  
            { name: "Scrap Metal 4", url: "https://www.gamearter.com/game/scrap-metal-4/" },
            { name: "Scrap Metal 5", url: "https://www.gamearter.com/game/scrap-metal-5/" },
            { name: "Scrap Metal 6", url: "https://www.gamearter.com/game/scrap-metal-6/" },
            { name: "GameArter", url: "https://www.gamearter.com/games" },
            { name: "Geometry Dash Lite", url: "https://selenite.cc/semag/gdlite/index.html" },
            { name: "FNAF 2", url: "https://selenite.cc/semag/fnaf2/index.html" },
            { name: "FNAF 3", url: "https://selenite.cc/semag/fnaf3/index.html" },
            { name: "FNAF 4", url: "https://selenite.cc/semag/fnaf4/index.html" },
            { name: "LittleBigSnake", url: "https://littlebigsnake.com" },
            { name: "Surviv.io", url: "https://surviv.io" },
            { name: "Spacebar Clicker", url: "https://unblocked-games.s3.amazonaws.com/spacebar-clicker.html" },
            { name: "Deadshot.io", url: "https://deadshot.io" },
            { name: "Clicker", url: "https://elucidation.github.io/ClickerJs/" },
            { name: "Smashkarts.io", url: "https://smashkarts.io" },
            { name: "Pixel Force", url: "https://www.yurk.com/games/pixelforce/" },
            { name: "Happy Glass", url: "https://www.yurk.com/games/happyglass/" },
            { name: "Selenite (fixed)", url: "https://selenite.cc/" },
            { name: "Duck Life 1", url: "https://selenite.cc/semag/ducklife1/index.html" },
            { name: "Duck Life 2", url: "https://selenite.cc/semag/ducklife2/index.html" },
            { name: "Duck Life 3", url: "https://selenite.cc/semag/ducklife3/index.html" },
            { name: "Duck Life 4", url: "https://selenite.cc/semag/ducklife4/index.html" },
            { name: "Duck Life 5", url: "https://selenite.cc/semag/ducklife5/index.html" },
            { name: "Duck Life 6", url: "https://selenite.cc/semag/ducklife6/index.html" },
            { name: "Stick Running", url: "https://www.yurk.com/games/stickrunning/" },
            { name: "Happy Filled Glass", url: "https://www.yurk.com/games/happyfilledglass/" },
            { name: "Elastic Man", url: "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html" },
            { name: "Tunnel Rush", url: "https://ubg44.github.io/TunnelRush/" },
            { name: "Interactive Buddy", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Interactive%20Buddy" },
            { name: "Baldis Basics", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/baldisbasics/game.html" },
            { name: "Minecraft Classic", url: "https://cbgamesdev.github.io/chilibowlflash/minecrap/index.html" },
            { name: "2048", url: "https://2048game.com/" },
            { name: "Flappy Bird", url: "https://adfree3kh0.github.io/projects/flappy-bird/index.html" },
            { name: "1v1.lol Server 2", url: "https://jungle.pages.dev/games/1v1lol/" },
            { name: "1v1.lol Fortnite (Play at home)", url: "https://1v1.lol" },
            { name: "Impossible Quiz 2", url: "https://archive.org/details/tiq2_swf" },
            { name: "Astra Client Eaglercraft 1.8", url: "https://barneycompiler.github.io/AstraClientEagler/javascript" },
            { name: "Tetris", url: "https://tetris.com/play-tetris" },
            { name: "Stickman Swing", url: "https://www.yurk.com/games/stickmanswing"},
            { name: "Google Easter Egg Games", url: "https://elgoog.im" },
            { name: "Duck Math Games", url: "https://duckmath.org/index.html" },
            { name: "Tower of Treasure", url: "https://beinternetawesome.withgoogle.com/en_us/interland/landing/tower-of-treasure" },
            { name: "Fancy Text Generator", url: "https://lingojam.com/FancyTextGenerator" },
            { name: "Yurk.com", url: "https://yurk.com" },
            { name: "Bottle Flip 3D", url: "https://d3rtzzzsiu7gdr.cloudfront.net/play/index.html?Bottle%20Flip%203D" },
            { name: "Friv.com", url: "https://friv.com" },
            { name: "Slither.io Ripoff", url: "https://gulper.io/" },
            { name: "Infinite Craft", url: "https://infinite-craft.com/infinite-craft/" },
            { name: "Baldis Basics Method 2", url: "https://igroutka.ru/loader/game/26471/" },
            { name: "We Become what we Behold", url: "https://gnhustgames.github.io/wbwwb/" },
            { name: "Time Shooter", url: "https://games.crazygames.com/en_US/time-shooter/index.html" },
            { name: "Time Shooter 2", url: "https://games.crazygames.com/en_US/time-shooter-2/index.html" },
            { name: "Time Shooter 3", url: "https://games.crazygames.com/en_US/time-shooter-3-swat/index.html" },
            { name: "Chrome Dino", url: "https://htmlxm.github.io/h7/dinosaur-game/" },
            { name: "Getting over it ( Scratch )", url: "https://turbowarp.org/389464290/embed?autoplay&addons=remove-curved-stage-border,pause,gamepad" },
            { name: "1v1.lol Server 3", url: "https://player.work/1v1lol/index.html" },
            { name: "Eaglercraft Clients", url: "https://eaglercraftx1-8.github.io/" },
            { name: "Easyfun.gg", url: "https://easyfun.gg" },
            { name: "Minecraft Java Edition", url: "https://mcraft.fun" },
            { name: "Selenite Server 2", url: "https://selenite-copy.pages.dev" },
            { name: "WebMC (Eaglercraft Launcher)", url: "https://webmc.xyz/" },
            { name: "Vex 3", url: "https://adfree3kh0.github.io/projects/vex3/index.html" },
            { name: "Vex 4", url: "https://1kh0.github.io/projects/vex4/index.html" },
            { name: "Vex 5", url: "https://adfree3kh0.github.io/projects/vex5/index.html" },
            { name: "Vex 6", url: "https://adfree3kh0.github.io/projects/vex6/index.html" },
            { name: "Vex 7", url: "https://main.dd8vt524eqsk2.amplifyapp.com/projects/vex7/index.html" },
            { name: "Cookie Clicker 2024", url: "https://a6936-19424025.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~19424025/course%20files/cookie%20clicker/index.html?download=1&inline=1" },
            { name: "Sandspiel Ripoff (Sandsaga)", url: "https://sandsaga.com" },
            { name: "Rocket Bot Royale", url: "https://rocketbotroyale2.winterpixel.io" },
            { name: "Retro Bowl", url: "https://ethonion10.neocities.org/" },
            { name: "Soundboard", url: "https://sprintingsnail69.github.io/coolsounds/" },
            { name: "Shell Shockers", url: "https://shellshock.io/" },
            { name: "Moto X3M", url: "https://ubg365.github.io/moto-x3m/play.html" },
            { name: "Moto X3M 2", url: "https://slope-game.github.io/newgame/motox3m-2/" },
            { name: "Moto X3M 3", url: "https://slope-game.github.io/newgame/motox3m-3/" },
            { name: "Moto X3M Winter", url: "https://unblocked-games.s3.amazonaws.com/games/2024/gm/moto-x3m-winter/index.html" },
            { name: "Moto X3M Pool Party", url: "https://unblocked-games.s3.amazonaws.com/games/2024/gm/moto-x3m-pool-party/index.html" },
            { name: "Moto X3M Spooky Land", url: "https://unblocked-games.s3.amazonaws.com/games/2024/gm/moto-x3m-spooky-land/index.html" },
            { name: "Death Run 3D", url: "https://ubg365.github.io/death-run-3d/" },
            { name: "EggyCar", url: "https://ubg365.github.io/eggy-car/play.html" },
            { name: "Stack", url: "https://ubg365.github.io/stack/" },
            { name: "Super Mario 64", url: "https://downloads.retrostic.com/play.php?console_slug=n64&rom_url=https://downloads.retrostic.com/roms/Super%20Mario%2064%20%28U%29%20%5B%21%5D.zip" },
            { name: "Asteroids ( 1986 )", url: "https://downloads.retrostic.com/play.php?console_slug=atari-7800&rom_url=https://downloads.retrostic.com/roms/Asteroids.zip" },
            { name: "Asteroids ( 1979 )", url: "https://online-emulators.com/arcade/Asteroids_(rev_2)/asteroid" },
            { name: "Bosconian", url: "https://www.retrogames.cc/embed/42458-bosconian-old-version.html" },
            { name: "Doom", url: "https://bestdosgames.com/games/doom/play" },
            { name: "Half-Life 1", url: "https://x8bitrain.github.io/webXash/" },
            { name: "Tetris ( NES )", url: "https://downloads.retrostic.com/play.php?console_slug=nes&rom_url=https://downloads.retrostic.com/roms/Tetris%20%28USA%29.zip" },
            { name: "EarthBound", url: "https://downloads.retrostic.com/play.php?console_slug=snes&rom_url=https://downloads.retrostic.com/roms/EarthBound%20%28USA%29.zip" },
            { name: "Pac Man", url: "https://downloads.retrostic.com/play.php?console_slug=mame&rom_url=https://downloads.retrostic.com/roms/pacman.zip" },
            { name: "New rally x", url: "https://www.retrogames.cc/embed/9312-new-rally-x.html" },
            { name: "Super Mario Bros", url: "https://downloads.retrostic.com/play.php?console_slug=nes&rom_url=https://downloads.retrostic.com/roms/Super%20Mario%20Bros%20%28E%29.zip" },
            { name: "Fake Hacking Prank", url: "https://geektyper.com/" },
            { name: "Classroom Games", url: "https://dnrweqffuwjtx.cloudfront.net/" },
            { name: "Distributions Game", url: "https://d10o6em2qtnr4q.cloudfront.net/assets/ca72aa6abe504291b749002226ef9094/index.html" },
            { name: "Sonic CD", url: "https://tws2401.github.io/Sonic-CD-WASM/" },
            { name: "Sonic 4: Episode 1", url: "https://wamwoowam.co.uk/sonic4/" }, 
            { name: "WebVM", url: "https://webvm.io/" },  
            { name: "Evoworld.io", url: "https://evoworld.io/" },
            { name: "Links123 Games", url: "https://ricardomariosonic123.github.io/Links123-V3" },
            { name: "Block Blast", url: "https://blockblastonline.com" },
            { name: "Masked Forces Unlimited", url: "https://maskedforcesunlimited.github.io/" },
            { name: "Bad Time Simulator", url: "https://badtimesimulator.io" },    
            { name: "I Beat Kids", url: "https://ibeatkids.com" }, 
            { name: "N-Gon Enhanced", url: "https://n-gon-enhanced.vercel.app/" },
            { name: "Chattyicesmathwork", url: "https://chattyicesmathwork.neocities.org/" },
      

        ];
        var container = document.createElement("div");
        container.setAttribute("id", "gamesContainer");
        document.body.appendChild(container);

        var lowestButtonPosition = 0; // Initialize with 0

        games.forEach(function(game) {
            var button = document.createElement("button");
            button.textContent = game.name;
            button.className = "button";
            button.onclick = function() {
                // Hide all buttons
                document.querySelectorAll('.button').forEach(function(element) {
                    element.style.display = "none";
                });

                // Hide the search bar
                var searchBar = document.getElementById("searchbar");
                if (searchBar) {
                    searchBar.style.display = "none";
                }

                // Load the game embed
                document.getElementById("gamesContainer").innerHTML = '<object id="' + game.name.replace(/ /g, "") + 'Frame" type="text/html" data="' + game.url + '" style="width: 100%; height: 100vh;"></object>';
            };

            container.appendChild(button);

            // Update lowestButtonPosition
            var buttonPosition = button.offsetTop + button.offsetHeight;
            if (buttonPosition > lowestButtonPosition) {
                lowestButtonPosition = buttonPosition;
            }
        });

        // Add "Request a game" button
        var requestButton = document.createElement("button");
        requestButton.textContent = "Request a game/feature/Report A Bug";
        requestButton.className = "button";
        requestButton.style.position = "absolute";
        requestButton.style.top = (lowestButtonPosition + 90) + "px"; // Position 90px below the lowest button
        requestButton.style.left = "50%";
        requestButton.style.transform = "translateX(-50%)";
        requestButton.onclick = function() {
            document.body.innerHTML = '<object id="requestGameForm" type="text/html" data="https://docs.google.com/forms/d/e/1FAIpQLSfxAKspb2_AFVdltjOXkeOaxdwdco2S0BRvRqV5grah331pmg/viewform?embedded=true" style="width: 100%; height: 100vh;"></object>';
        };
        document.body.appendChild(requestButton);

    }, 0);
};



document.getElementById("launchApps").onclick = function() {
    document.body.innerHTML = "<h7>Loading...<h7>";
    setTimeout(function() {
        document.body.innerHTML = "";
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Apps 🔍'>";
        var apps = [
            { name: "Virtual Machine", url: "https://chattyice234.github.io/ChattyVM/" },
            { name: "Virtual Machine (3 min. Free Trial)", url: "https://www.browserling.com/virtual-browser" },
            { name: "Virtual Machines", url: "https://copy.sh/v86/" },
            { name: "Dinguschan's Github Search", url: "https://github-repository-search-two.vercel.app/" },
            { name: "DingusProxy", url: "https://dinguschan-owo.github.io/dingusproxy" },
            { name: "Helios Browser", url: "https://helios-browser.vercel.app" },
            { name: "ByeBlocker", url: "https://chic-kashata-e4cec3.netlify.app/" },
            { name: "Blobwifi", url: "https://blobby-boi.github.io/Blobwifi/" },
            { name: "Interstellar", url: "https://hiyu19.easterndns.com/" },
            { name: "Jordan's Math Work", url: "https://jmathw.laviewddns.com/" },
            { name: "Dinguschan's Blocking Extension Checker", url: "https://installed-blocking-extension-checker.vercel.app/" },
            { name: "ChatGPT", url: "https://chatgptfree.ai/chat/" },
            { name: "DeepAI", url: "https://deepai.org/" },
            { name: "Appetize.io Android Phone", url: "https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&debug=true&device=pixel4&embed=true&launchUrl=exp%3A%2F%2Fexp.host%2F%40snack%2Fsdk.46.0.0-ghV0%21Qgb8N&scale=65&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B&osVersion=11.0&deviceColor=black" },
            { name: "List of Exploits", url: "https://cocalc.com/github/3kh0/ext-remover/blob/main/README.md" },
             { name: "History Flooder", url: "https://spritzerland.github.io/chbook/" },
            { name: "Gauth Math Helper", url: "https://gauthmath.com" },
            { name: "PopAI", url: "https://popai.pro/" },
            { name: "Calculator", url: "https://desmos.com/scientific" },
            { name: "SmoresXO School Tools", url: "https://smoresxo.shop/" },
            { name: "SmoresXO Proxies", url: "https://smoresxo.shop/proxies" },
            { name: "HTML Editor", url: "https://spacenerd24.github.io/Online-HTML-Viewer/" },
            { name: "Fake Windows 10", url: "https://dustinbrett.com/" },
            { name: "Windows 11 in React", url: "https://win11.blueedge.me" },
            { name: "Windows 93", url: "https://v1.windows93.net/" },
            { name: "Windows XP Emulator", url: "https://winxp.vercel.app/" },
            { name: "AaronOS", url: "https://aaronos.dev/" },
            { name: "Windows 96", url: "https://windows96.net/" },
            { name: "AI Image Generator", url: "https://nuelink.com/tools/ai-image-generator" },
            { name: "YT to mp3", url: "https://cobalt.tools" },
            { name: "Dinguschan's URL Converter", url: "https://url-converter-opal.vercel.app/" },
            { name: "Notepad in JS", url: "https://notepad.js.org/index.html" },
            { name: "Dinguschan's Message Encoder/Decoder", url: "https://encoder-decoder-nine.vercel.app/" },
            { name: "EmulatorJS", url: "https://demo.emulatorjs.org/" },
        ];
        document.body.innerHTML = "";
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Apps'>";
        var container = document.createElement("div");
        container.setAttribute("id", "appsContainer");
        document.body.appendChild(container);

        apps.forEach(function(app) {
            var button = document.createElement("button");
            button.textContent = app.name;
            button.className = "button";
            button.onclick = function() {
                if (app.url) {
                    document.body.innerHTML = '';
                    var messageText = document.createElement("p");
                    messageText.textContent = app.message;
                    messageText.style.color = "#fff";
                    messageText.style.marginTop = "20px";
                    document.body.appendChild(messageText);
                    document.body.innerHTML = '<object id="appsFrame" type="text/html" data="' + app.url + '" style="width: 100%; height: 100vh;"></object>';
                } else if (app.action) {
                    app.action();
                }
            };
            container.appendChild(button);
        });
    }, 0);
};

document.getElementById("chat").onclick = function() {
  document.body.innerHTML = '<object id="chatFrame" type="text/html" data="https://chattyice234.github.io/online-chatroom/" style="width: 100%; height: 100vh;"></object>';
};
