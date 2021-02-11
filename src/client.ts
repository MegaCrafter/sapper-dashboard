import * as sapper from '@sapper/app';
import { 
	facebookFollowers, twitterFollowers, instagramFollowers, youtubeSubs,
	facebookChange, twitterChange, instagramChange, youtubeChange
} from "./components/stores"

sapper.start({
	target: document.querySelector('#sapper')
});

const followers = [facebookFollowers, twitterFollowers, instagramFollowers, youtubeSubs]
const changes = [facebookChange, twitterChange, instagramChange, youtubeChange]

setInterval(() => {
	const chance = Math.random();
	if (chance > 0.5) return;

	const select = Math.floor(Math.random() * 4);
	const change = Math.floor(Math.random() * 10);

	followers[select].update(old => old + change);
	changes[select].update(old => old + change);
}, 1000);