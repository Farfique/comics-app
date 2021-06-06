import AbstractView from "./abstractView.js";
import {getRandomIntInclusive} from "./utils";
import {fetchJson, getRequestUrl} from "./fetch";


export default class ComicsView extends AbstractView {
    
    constructor(params) {
        super(params);
        this.setTitle("Comics");
    }

    async getMax(){
        return fetchJson(getRequestUrl({})).then(data => {
            return data.num;
        });
    }
    async getObject(){
        return fetchJson(getRequestUrl(this.params));
    }


    async getHtml() {
        let max = await this.getMax();
        let data = await this.getObject();
        let date = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
        return `
            <div class="comicsCard">
                <div class="info">
                    <div class="title">${data.safe_title}</div>
                    <div class="date">${date}</div>
                </div>
                <div class="navigate_comics">
                    <a class="navigation_comics_button toFirst" href="/1">First</a>
                    <a class="navigation_comics_button toPrev" href="/${Math.max(1, data.num - 1)}">Prev</a>
                    <a class="navigation_comics_button toRandom" href="${getRandomIntInclusive(1, max)}">Random</a>
                    <a class="navigation_comics_button toNext" href="/${Math.min(max, data.num + 1)}">Next</a>
                    <a class="navigation_comics_button toCurrent" href="/">Current</a>
                </div>
                <div class="comicsItem">
                    <img class="responsive_image" src="${data.img}" alt="${data.alt}" title="${data.alt}"/>
                </div>
            </div>
            <div class="copyInfo_container">
                <p class="permanentLink">Permanent link to this comic: ${location.protocol}//${location.host}/${data.num}</p>
                <p class="permanentLink">Image URL (for hotlinking/embedding): ${data.img}</p>           
            </div>`;        
    }
}

