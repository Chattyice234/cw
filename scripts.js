// Open Update Log
     function openUpdateLog() {
     document.getElementById("updlog").style.display = "block";
     }
      
     // Close Update Log
     function closeUpdateLog() {
     document.getElementById("updlog").style.display = "none";
     document.getElementById("button-updlog").onclick = function() {
     openUpdateLog();
       };
     }
     
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
     
     document.addEventListener("DOMContentLoaded", function () {
    const particlesToggle = document.getElementById("particlesToggle");
    const blockTabToggle = document.getElementById("blockTabToggle");

    const particlesEnabled = localStorage.getItem("particlesEnabled") === "true";
    const blockTabEnabled = localStorage.getItem("blockTabEnabled") === "true";

    particlesToggle.checked = particlesEnabled;
    blockTabToggle.checked = blockTabEnabled;

    setParticlesState(particlesEnabled);

    setBlockTabState(blockTabEnabled);

    particlesToggle.addEventListener("change", function () {
        const isEnabled = particlesToggle.checked;
        localStorage.setItem("particlesEnabled", isEnabled);
        setParticlesState(isEnabled);
    });

    blockTabToggle.addEventListener("change", function () {
        const isEnabled = blockTabToggle.checked;
        localStorage.setItem("blockTabEnabled", isEnabled);
        setBlockTabState(isEnabled);
    });

    window.addEventListener("beforeunload", function (event) {
        if (blockTabToggle.checked) {
            event.preventDefault();
            event.returnValue = "";
        }
    });
});

function setParticlesState(enabled) {
    if (enabled) {
        console.log("Particles enabled");
    } else {
        console.log("Particles disabled");
    }
}

function setBlockTabState(enabled) {
    if (enabled) {
        console.log("Tab blocking enabled");
    } else {
        console.log("Tab blocking disabled");
    }
}
     
let blockTabEnabled = false;

document.getElementById('blockTabToggle').addEventListener('change', function () {
    blockTabEnabled = this.checked;
});

window.addEventListener('beforeunload', function (event) {
    if (blockTabEnabled) {
        event.preventDefault();
        event.returnValue = 'Are you sure you want to leave?';
    }
});

document.getElementById('disableParticlesToggle').addEventListener('change', function () {
    if (this.checked) {
        document.body.style.backgroundImage = 'none';
    } else {
        document.body.style.backgroundImage = "url('https://64.media.tumblr.com/d60fa89a6c6ef6b51790a079d7204540/f145147b69889cf3-a3/s640x960/1d7480b51aa3c7cfc46d85641dfd9f759eeadd95.gif')";
    }
});

function setCustomBackground() {
    const input = document.getElementById('customBackgroundInput');
    const imageUrl = input.value.trim();

    if (imageUrl) {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        input.value = '';
    } else {
        alert('Please enter a valid image URL.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});

function applyTheme(themeKey) {
    document.body.classList.remove("theme-current", "theme-old", "theme-beta", "theme-alpha");

    const launchGamesButton = document.getElementById("launchGames");
    launchGamesButton.classList.remove("theme-current", "theme-old", "theme-beta", "theme-alpha");

    if (themeKey === "current") {
        document.body.style.backgroundImage = "url('https://64.media.tumblr.com/d60fa89a6c6ef6b51790a079d7204540/f145147b69889cf3-a3/s640x960/1d7480b51aa3c7cfc46d85641dfd9f759eeadd95.gif')";
        document.body.style.backgroundColor = "#005";
        document.body.classList.add("theme-current");

        launchGamesButton.classList.add("theme-current");
    } else if (themeKey === "old") {
        document.body.style.backgroundImage = "url('https://i.redd.it/tnva3hgpheu71.gif')";
        document.body.style.backgroundColor = "#000";
        document.body.classList.add("theme-old");

        launchGamesButton.classList.add("theme-old");
    } else if (themeKey === "beta") {
        document.body.style.backgroundImage = "url('https://preview.redd.it/probably-the-best-screenshot-ive-ever-taken-in-minecraft-v0-d2ep95z2r7d81.png?auto=webp&s=ae3b379a05c937d0eb486879a4ce9f52bb9fde49')";
        document.body.style.backgroundColor = "#003366";
        document.body.classList.add("theme-beta");

        launchGamesButton.classList.add("theme-beta");
    } else if (themeKey === "alpha") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#005";
        document.body.classList.add("theme-alpha");

        launchGamesButton.classList.add("theme-alpha");
    }
    localStorage.setItem("selectedTheme", themeKey);
}

document.getElementById("current-theme").addEventListener("click", function () {
    applyTheme("current");
});

document.getElementById("old-theme").addEventListener("click", function () {
    applyTheme("old");
});

document.getElementById("beta-theme").addEventListener("click", function () {
    applyTheme("beta");
});

document.getElementById("alpha-theme").addEventListener("click", function () {
    applyTheme("alpha");
});
                        
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
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Games'>"; 
        var games = [
            { name: "Pandemonium Minigame", url: "https://redtide-stack.github.io/Pandemonium-Minigame-fork/" },
            { name: "Block Fist Games", url: "https://blockfistgames2.weebly.com/" },
            { name: "COD Zombies", url: "https://nzp.gay" },
            { name: "EaglyMC (Minecraft)", url: "https://eaglymc.com/" },
            { name: "Minecraft (1.5)", url: "https://sd592g.github.io/zj684od4lfg/" },
            { name: "Eaglercraft Server List", url: "https://servers.eaglercraft.com/" },
            { name: "Minecraft 1.8", url: "https://eaglercraft.com/mc/1.8.8-wasm/" },
            { name: "Minecraft (1.8 Server 2)", url: "https://gaming-escape.github.io/public/assets/games/eaglercraft/index.html" },
            { name: "Minecraft (1.9)", url: "https://d272xss3wq00xu.cloudfront.net/1-9.html" },
            { name: "Minecraft (1.11)", url: "https://d272xss3wq00xu.cloudfront.net/1-11.html" },
            { name: "Minecraft 1.12", url: "https://eaglercraft.com/mc/1.12.2-wasm/" },
            { name: "Minecraft 1.12 Server 2", url: "https://gaming-escape.github.io/public/assets/games/minecraft-1.12/index.html" },
            { name: "Resent Client Eagler (1.8)", url: "https://reslauncher4.vercel.app" },
            { name: "Starlike Client Eagler (1.16)", url: "https://starlike.zumbiepig.dev/" },
            { name: "Eaglercraft (1.20)", url: "https://dfs3rzq44v6as.cloudfront.net/?frame=fullscreen/#/lessons/964c4358-60a7-4121-908e-63f6ae6e5ef0" },
            { name: "Paper Minecraft", url: "https://obsidianig.com/games/paperminecraft/index.html" },
            { name: "Roblox (Easyfun.gg)", url: "https://www.easyfun.gg/games/roblox.html" },
            { name: "Roblox (Now.gg)", url: "https://pathetic-roblox-main.vercel.app/" },
            { name: "Sketchbook 0.4", url: "https://roblox-unblock.github.io/r8/sketchbook-04/" },
            { name: "Tortilla Games", url: "https://dfs3rzq44v6as.cloudfront.net"},
            { name: "Ultraviolet", url: "https://dfs3rzq44v6as.cloudfront.net/#/prxy" },
            { name: "Five Nights At Winston's", url: "https://g.deev.is/fnaw" },
            { name: "1 (Reversed 2048)", url: "https://lite.3kh0.net/projects/1/" },
            { name: "Bottle Flip 3D", url: "https://d272xss3wq00xu.cloudfront.net/bottle-flip-3d/index.html" },
            { name: "Neal.fun", url: "https://neal.fun" },
            { name: "Subway Surfers", url: "https://dddavit.github.io/subway/" },
            { name: "Subway Surfers (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/subway-surfers/index.html" },
            { name: "Subway Surfers Monaco", url: "https://roblox-unblock.github.io/r8/subway-surfers-monaco/" },
            { name: "Super Tunnel Rush", url: "https://gaming-escape.github.io/public/assets/games/super-tunnel-rush/index.html" },
            { name: "Slope", url: "https://mathadventure1.github.io/slope/slope/index.html" },
            { name: "Slope (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/slope/index.html" },
            { name: "Slope 2", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Slope%202" },
            { name: "Slope 3", url: "https://slope3.com/" },
            { name: "Bloons Tower Defense", url: "https://lite.3kh0.net/projects/bloonstd/" },
            { name: "Bloons Tower Defense 2", url: "https://1kh0.github.io/projects/bloonstd2/index.html" },
            { name: "Bloons Tower Defense 3", url: "https://selenite.laviewddns.com/semag/btd3/index.html" },
            { name: "Bloons Tower Defense 4", url: "https://selenite.laviewddns.com/semag/btd4/index.html" },
            { name: "Bloons Tower Defense 5", url: "https://selenite.laviewddns.com/semag/btd5/index.html" },
            { name: "Bloons Tower Defense 6", url: "https://selenite.laviewddns.com/semag/btd6/index.html" },
            { name: "Fortnite Ripoff", url: "https://gaming-escape.github.io/public/assets/games/BuildNowGG/index.html" },
            { name: "Cookie Clicker", url: "https://eli-schwartz.github.io/cookieclicker/" },
            { name: "Cookie Clicker Server 2", url: "https://gaming-escape.github.io/public/assets/games/cookie-clicker/index.html" },
            { name: "Cookie Clicker 2024", url: "https://a6936-19424025.cluster7.canvas-user-content.com/courses/6936~1014013/files/6936~19424025/course%20files/cookie%20clicker/index.html?download=1&inline=1" },
            { name: "Crazy Cars", url: "https://gaming-escape.github.io/public/assets/games/crazy-cars/index.html" },
            { name: "Drive Mad", url: "https://ubg365.github.io/drive-mad/play.html" },
            { name: "Drive Mad (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/drivemad/index.html" },
            { name: "Drive Mad Mod", url: "https://play.fancade.com/63BA239C20C40BF3" }, 
            { name: "BitLife", url: "https://ubg365.github.io/bitlife-life-simulator/play.html" },
            { name: "Ztype", url: "https://zty.pe" },
            { name: "3kh0.github.io (ad spammy)", url: "https://3kh0.github.io" },
            { name: "Hover Racer Drive", url: "https://ubg365.github.io/hover-racer-drive/" },
            { name: "Monkey Mart", url: "https://gaming-escape.github.io/public/assets/games/monkey-mart/index.html" },
            { name: "Monkeytype Lite", url: "https://gaming-escape.github.io/public/assets/games/monkeytype-lite/index.html" },
            { name: "Drift Boss", url: "https://roblox-unblock.github.io/r/drift-boss" },
            { name: "Burnout Extreme Drift 2", url: "https://gaming-escape.github.io/public/assets/games/burnout-extreme-drift-2/index.html" },
            { name: "Madalin Stunt Cars 2", url: "https://ubg100.github.io/games/Madalin/index.html" },
            { name: "Candy Crush", url: "https://gaming-escape.github.io/public/assets/games/candy-crush/index.html" },
            { name: "Master Chess", url: "https://gaming-escape.github.io/public/assets/games/master-chess/index.html" },
            { name: "Breaking the bank", url: "https://mountain658.github.io/zbreakingthebank.html" },
            { name: "Escaping the prison", url: "https://gaming-escape.github.io/public/assets/games/escaping-the-prison/index.html" },
            { name: "Stealing the diamond", url: "https://gaming-escape.github.io/public/assets/games/stealing-the-diamond/index.html" },
            { name: "Infiltrating the airship", url: "https://gaming-escape.github.io/public/assets/games/infiltrating-the-airship/index.html" },
            { name: "Fleeing the complex", url: "https://gaming-escape.github.io/public/assets/games/fleeing-the-complex/index.html" },
            { name: "Funny Shooter 2", url: "https://gaming-escape.github.io/public/assets/games/funny-shooter-2/index.html" },
            { name: "Free Rider", url: "https://freeriderhd.com" },
            { name: "Run 3", url: "https://lekug.github.io/tn6pS9dCf37xAhkJv/" },
            { name: "Run 3 (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/run-3/index.html" },
            { name: "Bloxorz", url: "https://ad-freegames.github.io/flash/game/bloxorz.html" },
            { name: "Drift Hunters", url: "https://obsidianig.com/games/drifthunters/" },
            { name: "Choppy Orc", url: "https://gaming-escape.github.io/public/assets/games/choppy-orc/index.html" },
            { name: "Venge.io", url: "https://venge.io/" },
            { name: "Venge.io (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/venge-io/index.html" },
            { name: "Highway Racer Pro", url: "https://unblocked-games.s3.amazonaws.com/highway-racer-pro.html" }, 
            { name: "Hole.io", url: "https://hole-io.com/" },
            { name: "Webcraft", url: "https://jesgran.is-a.dev/webcraft/" }, 
            { name: "Sandspiel Studio", url: "https://studio.sandspiel.club" },
            { name: "Blackjack Casino", url: "https://www.yurk.com/games/black/" },
            { name: "FNAF", url: "https://ubg77.github.io/fix/fnaf1/" },
            { name: "Krunker.io", url: "https://krunker.io/" },
            { name: "Tomb Of The Mask", url: "https://gaming-escape.github.io/public/assets/games/tomb-of-the-mask/index.html" },
            { name: "Tomb Of The Mask (Server 2)", url: "https://mountain658.github.io/g/tombofthemask/index.html" },
            { name: "Tag", url: "https://gaming-escape.github.io/public/assets/games/tag/index.html" },
            { name: "Tag 2", url: "https://gaming-escape.github.io/public/assets/games/tag-2/index.html" },
            { name: "Tunnel Rush", url: "https://gaming-escape.github.io/public/assets/games/tunnel-rush/index.html" },
            { name: "Tunnel Rush (Server 2)", url: "https://ubg44.github.io/TunnelRush/" },
            { name: "Tunnel Rush 2", url: "https://gaming-escape.github.io/public/assets/games/tunnel-rush-2/index.html" },
            { name: "worldguessr", url: "https://www.worldguessr.com/" },
            { name: "World's Hardest Game", url: "https://mountain658.github.io/zworldsHardestGame.html" },
            { name: "MinecraftSkins.net", url: "https://minecraftskins.net" },
            { name: "Skindex", url: "https://skindex.pro" },
            { name: "Mr. Bullet", url:"https://www.yurk.com/games/mrbullet/" },
            { name: "Sandspiel", url: "https://sandspiel.club" },
            { name: "Slow Roads", url: "https://slowroads.io" },
            { name: "Slow Roads (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/slow-roads/index.html" },
            { name: "Backrooms", url: "https://adfree3kh0.github.io/projects/backrooms/index.html" },
            { name: "The Impossible Quiz", url: "https://adfree3kh0.github.io/projects/impossiblequiz/index.html" },
            { name: "The Impossible Quiz 2", url: "https://archive.org/details/tiq2_swf" },
            { name: "The Impossible Quiz 2 (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/the-impossible-quiz-2/index.html" },
            { name: "Tanuki Sunset", url: "https://gaming-escape.github.io/public/assets/games/tanuki-sunset/index.html" },
            { name: "Idle Breakout", url: "https://gaming-escape.github.io/public/assets/games/idle-breakout/index.html" },
            { name: "Among Us Singleplayer", url: "https://adfree3kh0.github.io/projects/among-us/index.html" }, 
            { name: "A Dance Of Fire And Ice", url: "https://roblox-unblock.github.io/r8/a-dance-of-fire-and-ice/" },
            { name: "Angry Birds", url: "https://gaming-escape.github.io/public/assets/games/angry-birds/" },
            { name: "Bad Piggies", url: "https://gaming-escape.github.io/public/assets/games/bad-piggies/index.html" },
            { name: "Bad Piggies (Server 2)", url: "https://www.friv.cm/bad-piggies/fullscreen/" },
            { name: "Cluster Rush",  url: "https://roblox-unblock.github.io/r8/cluster-rush/" },
            { name: "Crossy Road", url: "https://gaming-escape.github.io/public/assets/games/crossy-road/index.html" },
            { name: "Crossy Road (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/crossyroad/index.html" },
            { name: "Crossy Road (Server 3)", url: "https://selenite.cc/semag/crossyroad/index.html" },
            { name: "CSGO Clicker", url: "https://gaming-escape.github.io/public/assets/games/csgo-clicker/index.html" },
            { name: "Cut The Rope", url: "https://gaming-escape.github.io/public/assets/games/cut-the-rope/index.html" },
            { name: "1v1.lol", url: "https://selenite.cc/semag/1v1lol/index.html" },
            { name: "1v1.lol Fortnite (Play at home)", url: "https://1v1.lol" },
            { name: "1v1.lol Server 2", url: "https://jungle.pages.dev/games/1v1lol/" },
            { name: "1v1.lol Server 3", url: "https://player.work/1v1lol/index.html" },
            { name: "Bloxd.io", url: "https://bloxd.io" },
            { name: "CubeRealm.io", url: "https://cuberealm.io/" },
            { name: "Super Mario Flash 2", url: "https://obsidianig.com/games/supermarioflash2/" },
            { name: "Super Mario Bros", url: "https://playmario.github.io/HTML5_Client/" },
            { name: "Aim Trainer", url: "https://aimtrainer.io/" },
            { name: "Scrap Metal 1", url: "https://www.gamearter.com/game/scrap-metal/" },  
            { name: "Scrap Metal 2", url: "https://www.gamearter.com/game/scrap-metal-2/" },
            { name: "Scrap Metal 3", url: "https://adfree3kh0.github.io/projects/scrapmetal/index.html" },  
            { name: "Scrap Metal 4", url: "https://www.gamearter.com/game/scrap-metal-4/" },
            { name: "Scrap Metal 5", url: "https://www.gamearter.com/game/scrap-metal-5/" },
            { name: "Scrap Metal 6", url: "https://www.gamearter.com/game/scrap-metal-6/" },
            { name: "GameArter", url: "https://www.gamearter.com/games" },
            { name: "Geometry Dash Lite", url: "https://gaming-escape.github.io/public/assets/games/geometry-dash/index.html" },
            { name: "Geometry Dash Lite (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/geometry-dash/" },
            { name: "Gladihoppers", url: "https://gaming-escape.github.io/public/assets/games/gladihoppers/index.html" },
            { name: "OvO", url: "https://gaming-escape.github.io/public/assets/games/ovo/" },
            { name: "OvO Dimensions", url: "https://gaming-escape.github.io/public/assets/games/ovo-dimensions/index.html" },
            { name: "Basket Random", url: "https://roblox-unblock.github.io/r8/basket-random/" },
            { name: "Soccer Random", url: "https://gaming-escape.github.io/public/assets/games/soccer-random/index.html" },
            { name: "Volley Random", url: "https://gaming-escape.github.io/public/assets/games/volley-random/index.html" },
            { name: "FNAF 2", url: "https://selenite.cc/semag/fnaf2/index.html" },
            { name: "FNAF 3", url: "https://selenite.cc/semag/fnaf3/index.html" },
            { name: "FNAF 4", url: "https://selenite.cc/semag/fnaf4/index.html" },
            { name: "LittleBigSnake", url: "https://littlebigsnake.com" },
            { name: "Surviv.io", url: "https://surviv.io" },
            { name: "Deadshot.io", url: "https://deadshot.io" },
            { name: "Clicker", url: "https://elucidation.github.io/ClickerJs/" },
            { name: "Smashkarts.io", url: "https://smashkarts.io" },
            { name: "Pixel Force", url: "https://www.yurk.com/games/pixelforce/" },
            { name: "Paper.io", url: "https://gaming-escape.github.io/public/assets/games/paper-io/index.html" },
            { name: "Physibox", url: "https://gaming-escape.github.io/public/assets/games/physibox/index.html" },
            { name: "Poor Eddie", url: "https://gaming-escape.github.io/public/assets/games/poor-eddie/index.html" },
            { name: "Poly Track", url: "https://gaming-escape.github.io/public/assets/games/poly-track/index.html" },
            { name: "Happy Glass", url: "https://www.yurk.com/games/happyglass/" },
            { name: "Happy Wheels", url: "https://gaming-escape.github.io/public/assets/games/happy-wheels/index.html" },
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
            { name: "Interactive Buddy", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Interactive%20Buddy" },
            { name: "Baldis Basics", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/baldisbasics/game.html" },
            { name: "Minecraft Classic", url: "https://cbgamesdev.github.io/chilibowlflash/minecrap/index.html" },
            { name: "2048", url: "https://2048game.com/" },
            { name: "Flappy Bird", url: "https://adfree3kh0.github.io/projects/flappy-bird/index.html" },
            { name: "Astra Client Eaglercraft 1.8", url: "https://barneycompiler.github.io/AstraClientEagler/javascript" },
            { name: "Tetris", url: "https://tetris.com/play-tetris" },
            { name: "Stickman Swing", url: "https://www.yurk.com/games/stickmanswing" },
            { name: "Stickman Hook", url: "https://gaming-escape.github.io/public/assets/games/stickman-hook/index.html" },
            { name: "Stickman Bike", url: "https://gaming-escape.github.io/public/assets/games/stickman-bike/" },
            { name: "Google Easter Egg Games", url: "https://elgoog.im" },
            { name: "Duck Math Games", url: "https://duckmath.org/index.html" },
            { name: "Tower of Treasure", url: "https://beinternetawesome.withgoogle.com/en_us/interland/landing/tower-of-treasure" },
            { name: "Fancy Text Generator", url: "https://lingojam.com/FancyTextGenerator" },
            { name: "Yurk.com", url: "https://yurk.com" },
            { name: "Bottle Flip 3D", url: "https://d3rtzzzsiu7gdr.cloudfront.net/play/index.html?Bottle%20Flip%203D" },
            { name: "Friv.com", url: "https://friv.com" },
            { name: "Friday Night Funkin (FNF)", url: "https://roblox-unblock.github.io/r88/friday-night-funkin/" },
            { name: "Slither.io Ripoff", url: "https://gulper.io/" },
            { name: "Infinite Craft", url: "https://copy05.github.io/InfinitCraft/" },
            { name: "We Become what we Behold", url: "https://gnhustgames.github.io/wbwwb/" },
            { name: "Time Shooter", url: "https://selenite.laviewddns.com/semag/timeshooter1/index.html" },
            { name: "Time Shooter 2", url: "https://gaming-escape.github.io/public/assets/games/time-shooter-2/" },
            { name: "Time Shooter 3", url: "https://gaming-escape.github.io/public/assets/games/time-shooter-3/" },
            { name: "Chrome Dino", url: "https://htmlxm.github.io/h7/dinosaur-game/" },
            { name: "Getting over it ( Scratch )", url: "https://turbowarp.org/389464290/embed?autoplay&addons=remove-curved-stage-border,pause,gamepad" },
            { name: "Tiny Fishing", url: "https://roblox-unblock.github.io/r/tiny-fishing/" },
            { name: "Eaglercraft Clients", url: "https://eaglercraftx1-8.github.io/" },
            { name: "Easyfun.gg", url: "https://easyfun.gg" },
            { name: "Minecraft Java Edition", url: "https://mcraft.fun" },
            { name: "Selenite Server 2", url: "https://selenite-copy.pages.dev" },
            { name: "WebMC (Eaglercraft Launcher)", url: "https://webmc.xyz/" },
            { name: "Vex 3", url: "https://gaming-escape.github.io/public/assets/games/vex-3/index.html" },
            { name: "Vex 4", url: "https://gaming-escape.github.io/public/assets/games/vex-4/index.html" },
            { name: "Vex 5", url: "https://gaming-escape.github.io/public/assets/games/vex-5/index.html" },
            { name: "Vex 6", url: "https://gaming-escape.github.io/public/assets/games/vex-6/index.html" },
            { name: "Vex 7", url: "https://gaming-escape.github.io/public/assets/games/vex-7/index.html" },
            { name: "Vex 8", url: "https://gaming-escape.github.io/public/assets/games/vex-8/index.html" },
            { name: "Vex X3M", url: "https://gaming-escape.github.io/public/assets/games/vex-x3m/index.html" },
            { name: "Sandspiel Ripoff (Sandsaga)", url: "https://sandsaga.com" },
            { name: "Rocket Bot Royale", url: "https://rocketbotroyale2.winterpixel.io" },
            { name: "Retro Bowl", url: "https://ethonion10.neocities.org/" },
            { name: "Retro Bowl (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/retro-bowl/index.html" },
            { name: "Retro Bowl College", url: "https://gaming-escape.github.io/public/assets/games/retro-bowl-college/index.html" },
            { name: "Rooftop Snipers", url: "https://gaming-escape.github.io/public/assets/games/rooftop-snipers/index.html" },
            { name: "Rooftop Snipers 2", url: "https://gaming-escape.github.io/public/assets/games/rooftop-snipers-2" },

            { name: "Soundboard", url: "https://sprintingsnail69.github.io/coolsounds/" },
            { name: "Snow Rider 3D", url: "https://gaming-escape.github.io/public/assets/games/snow-rider-3d/index.html" },
            { name: "Shell Shockers", url: "https://shellshock.io/" },
            { name: "Moto X3M", url: "https://gaming-escape.github.io/public/assets/games/moto-x3m/index.html" },
            { name: "Moto X3M 2", url: "https://gaming-escape.github.io/public/assets/games/motox3m2/index.html" },
            { name: "Moto X3M 3", url: "https://slope-game.github.io/newgame/motox3m-3/" },
            { name: "Moto X3M Winter", url: "https://gaming-escape.github.io/public/assets/games/motox3m-winter/index.html" },
            { name: "Moto X3M Pool", url: "https://gaming-escape.github.io/public/assets/games/motox3m-pool/index.html" },
            { name: "Moto X3M Spooky", url: "https://gaming-escape.github.io/public/assets/games/motox3m-spooky/index.html" },
            { name: "Death Run 3D", url: "https://ubg365.github.io/death-run-3d/" },
            { name: "EggyCar", url: "https://ubg365.github.io/eggy-car/play.html" },
            { name: "Stack", url: "https://ubg365.github.io/stack/" },
            { name: "Stack (Server 2)", url: "https://gaming-escape.github.io/public/assets/games/stack/index.html" },
            { name: "Super Mario 64", url: "https://downloads.retrostic.com/play.php?console_slug=n64&rom_url=https://downloads.retrostic.com/roms/Super%20Mario%2064%20%28U%29%20%5B%21%5D.zip" },
            { name: "Asteroids ( 1986 )", url: "https://downloads.retrostic.com/play.php?console_slug=atari-7800&rom_url=https://downloads.retrostic.com/roms/Asteroids.zip" },
            { name: "Asteroids ( 1979 )", url: "https://online-emulators.com/arcade/Asteroids_(rev_2)/asteroid" },
            { name: "Bosconian", url: "https://www.retrogames.cc/embed/42458-bosconian-old-version.html" },
            { name: "Doom", url: "https://bestdosgames.com/games/doom/play" },
            { name: "Doodle Jump", url: "https://gaming-escape.github.io/public/assets/games/doodle-jump/index.html" },
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
            { name: "Block Blast", url: "https://blockblastonline.com" },
            { name: "Masked Forces Unlimited", url: "https://maskedforcesunlimited.github.io/" },
            { name: "Bad Time Simulator", url: "https://jcw87.github.io/c2-sans-fight/" },    
            { name: "I Beat Kids", url: "https://ibeatkids.com" }, 
            { name: "N-Gon Enhanced", url: "https://n-gon-enhanced.vercel.app/" },
            { name: "Chattyicesmathwork", url: "https://chattyicesmathwork.neocities.org/" },
            { name: "Thirty Dollar Website", url: "https://thirtydollar.website" },

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
    }, 0);
};

document.getElementById("launchApps").onclick = function() {
    document.body.innerHTML = "<h7>Loading...<h7>";
    setTimeout(function() {
        document.body.innerHTML = "";
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Apps 🔍'>";
        var apps = [
            { name: "Virtual Machine", url: "https://chattyice234.github.io/cvm/" },
            { name: "Virtual Machine (3 min. Free Trial)", url: "https://www.browserling.com/virtual-browser" },
            { name: "Virtual Machines", url: "https://copy.sh/v86/" },
            { name: "Links123 Games", url: "https://ricardomariosonic123.github.io/Links123-V3" },
            { name: "Dinguschan's Github Search", url: "https://github-repository-search-two.vercel.app/" },
            { name: "DingusProxy", url: "https://dinguschan-owo.github.io/dingusproxy" },
            { name: "Helios Browser", url: "https://helios-browser.vercel.app" },
            { name: "ByeBlocker", url: "https://chic-kashata-e4cec3.netlify.app/" },
            { name: "Blobwifi", url: "https://blobby-boi.github.io/Blobwifi/" },
            { name: "Rammerhead", url: "https://code.edu.hse.tw/" },
            { name: "Interstellar", url: "https://menu.earlyrisercoffeeshop.com" },
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
            { name: "SmoresXO Proxies", url: "https://smoresxo.shop/proxies" },
            { name: "HTML Editor", url: "https://spacenerd24.github.io/Online-HTML-Viewer/" },
            { name: "Fake Windows 10", url: "https://dustinbrett.com/" },
            { name: "Windows 11 in React", url: "https://win11.blueedge.me" },
            { name: "Windows 93", url: "https://v1.windows93.net/" },
            { name: "Windows XP Emulator", url: "https://winxp.vercel.app/" },
            { name: "AaronOS", url: "https://aaronos.dev/" },
            { name: "Windows 96", url: "https://windows96.net/" },
            { name: "AI Image Generator", url: "https://perchance.org/ai-text-to-image-generator" },
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
  document.body.innerHTML = '<object id="chatFrame" type="text/html" data="https://chattyice234.github.io/online-chatroom" style="width: 100%; height: 100vh;"></object>';
};

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
        "Make sure you tab cloak",
        "I AM NOT A FRIDGE!",
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
        "Mind your manners!",
        "I have a question. I have an answer.",
        "penguins are nice",
        "Made with love, not AI.",
        "You got minigames on your phone?",
        "THE_Musicmanaz - Good Luck",
        "Beep, boop. I, Am, A, Robot.",
        "Minecraft 1.21 free download -->",
        "NoLongerNull - Star Of The Show",
        "💀",
        "🐷",
        "I can code",
        "Fancy!",
        "imagine not spending 10 hours working on a game website",
        "At the very least, we feature 1000 bugs on this site for you to enjoy.",
        "This isn't just a website, it's a free ticket to the principal's office",
        "I skid from everyone. Including myself.",
        "fun fact: your search history is being monitored by the second",
        "downloading your search history...",
        "What's your Slope high score?",
        "if you read this plz add Minecraft Roblox Fortnite or you not sigma 🙏🙏🙏",
        "So many games to choose from, where will you start? Google Classroom.",
        "share with your friends and everyone and the mars rover also dont forget the aliens",
        "Favian: You're so not sigma teacher. Math teacher: I'm not sigma. I'm... Delta.",
        "Error 404: Password download failed.",
        "Activate ChattyWebsite | Go to settings to activate ChattyWebsite",
        "Don't let this ruin your schoolwork",
        "I hate google search results",
        "ChattyWebsite",
        "Guys... where's my pencil?",
        "Your coordinates have been located. In approximately 30 seconds Chattyice will be there.",
        "god is coming 2:00",
        "Now with COD Zombies",
        "Who else has 100 minecraft worlds? No? Just me...?",
        "You just won $500! In Monopoly money!",
        "We love eaglercraft",
        "Your safety is our top priority.",
        "I-Tickle-Fat-Kids expanded my bookmarks with proxies",
        "I-Tickle-Fat-Kids is cool",
        "plaxer is cool",
        "Bruh, I don't even understand what's happening, I think a doors entity might be attacking us.",
        "There were no scan lines",
        "italian brainrot sucks",
        "Me trying to resist the urge not to swear every 10 seconds",
        "WHY AM I DRAWING EGGS?",
        "Yo mark, is minigames sus?",
        "What's deodorant?",
        "When was the last time you showered?",
        "Pressing reload + power button deletes every blocker",
        "Rabbit",
        "Minecraft Moog City 2 Theme",
        "Tab cloak me!",
        "Chattyice mod",
        "No being gay I-Tickle-Fat-Kids",
        "What's the wifi password?",
        "I no wher yoo lives",
        "Also try Links123!",
        "oooh secret message 0_0",
        "Better than ChattyWebsite 1.0.4",
        "School routine: Open educational tab. Games. Teacher turns on goguardian. Close games. Teacher leaves computer. Games.",
        "Made by Chattyice!",
        "Made by Chattyice234 on github!",
        "What is the perfect site?",
        "Welcome back for the first time to Squirrel Stapler",
        "pov: principals office",
        "We support chronically online users",
        "Press 0 now!",
        "Unreal!",
        "8.5/10!",
        "where next update plz add pls where update vro 🙏",
        "Tomorrow will be better than today",
        "I can be located at Y level -58.",
        "Today's mission: in a public place, eat crushed oreos out of an urn. I LOVE GRAMMAS COOKING 🗣🗣",
        "what i got in my easter basket: peeps. peeps. peeps. peeps. peeps. peeps candy. peeps candy. peeps candy. peeps. peeps. peeps.",
        "did the crane flies spawn in yet?",
        "Compare ChattyWebsite to ChattyWebsite",
        "ChattyWebsite. More like FattyWebsite",
        "My mommy said im special ✨",
        "Minigame in class",
        "That's what she said",
        "Don't worry! Surely you'll make it next time!",
        "Jarvis, say the N word",
        "America caw caw",
        "wall of shame",
        "Never new games",
        "Wheres my windows 12 iso?",
        "Stfu windows 10 eol",
        "With a panic key",
        "Press the ] key",
        "Now it's time for everybody's faaavorite subject: math!",
        "why tf does ntcatgamer want us to make a secret website so badly",
        "RicardoMarioSonic123 is cool",
        "links123 = 🔥 * ∞",
        "Fun fact: this is a website",
        "Oh, for the love of god.. Hey, welcome!",
        "Thank you for using ChattyWebsite",
        "I stole like 30 messages from Links123",
        "Mind: Okay, we need a name for our site since we're going to be upgrading Australian Man Website. Make sure it's original and not just half of our online alias, that's- Let's call it ChattyWebsite. Mind: Kill yourself.",
        "https://cwp-14577452.codehs.me",
        "hee hee",
        "wawa",
        "NoLongerNull - Persistence",
        "you're naaasty",
        "I'm getting VERY crunchy. How would you like me to handle this???",
        "Have you tried clicking me?",
        "Now with theme settings!", 
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
     
        let panicKey = localStorage.getItem('panicKey') || ']';
        let panicURL = localStorage.getItem('panicURL') || 'https://google.com';
        let panicKeyActive = true;
        
        document.getElementById('current-panic-key').textContent = panicKey;
        document.getElementById('panic-url').value = panicURL;
        
        const changePanicKeyBtn = document.getElementById('change-panic-key-btn');
        const listeningStatus = document.getElementById('listening-status');
        
        changePanicKeyBtn.addEventListener('click', function() {
            listeningStatus.textContent = "Listening for key press...";
            
            const keyListener = function(e) {
                panicKey = e.key;
                document.getElementById('current-panic-key').textContent = panicKey;
                listeningStatus.textContent = "Key set successfully!";
                
                document.removeEventListener('keydown', keyListener);
                
                setTimeout(() => {
                    listeningStatus.textContent = "";
                }, 2000);
            };
            
            document.addEventListener('keydown', keyListener);
        });
        
        function savePanicSettings() {
            panicURL = document.getElementById('panic-url').value;
            
            if (panicURL && !panicURL.startsWith('http://') && !panicURL.startsWith('https://')) {
                panicURL = 'https://' + panicURL;
                document.getElementById('panic-url').value = panicURL;
            }
            
            localStorage.setItem('panicKey', panicKey);
            localStorage.setItem('panicURL', panicURL);
            
            const panicStatus = document.getElementById('panic-status');
            panicStatus.textContent = "Settings saved successfully!";
            
            setTimeout(() => {
                panicStatus.textContent = "Panic key is active";
            }, 2000);
        }
        
        document.addEventListener('keydown', function(e) {
            if (panicKeyActive && e.key === panicKey) {
                window.location.href = panicURL;
            }
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            if (localStorage.getItem('panicKey')) {
                panicKey = localStorage.getItem('panicKey');
                document.getElementById('current-panic-key').textContent = panicKey;
            }
            
            if (localStorage.getItem('panicURL')) {
                panicURL = localStorage.getItem('panicURL');
                document.getElementById('panic-url').value = panicURL;
            }
        });

document.getElementById("req").onclick = function() {
    document.body.innerHTML = '<object id="chatFrame" type="text/html" data="https://docs.google.com/forms/d/e/1FAIpQLSfCb0QQSV7CBuKcW1NogIWSOLSrkpwDxmu7MqhXWHJcdoKSQg/viewform?embedded=true" style="width: 100%; height: 100vh;"></object>';
};
document.getElementById("prxy").onclick = function() {
  document.body.innerHTML = '<object id="prxyFrame" type="text/html" data="https://chattyice234.github.io/cwp/" style="width: 100%; height: 100vh;"></object>';
};
