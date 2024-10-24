import Header from "~/pages/components/Header";

import articlelist from "../combined_article.json";
import Article from "../components/article";

export default function articles() {

const articlelistjson = articlelist.data.viewer.latestPostsConnection.postPreviews;

const unixtext = 1709699255403;
let time = new Date(unixtext);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pl-8 text-center pt-7 font-bold bg-slate-400">
        <div className="text-3xl">Published Articles</div>
        <div className="ml-11 mr-11 mt-3">These are all articles that I have written and published that talk about my development professionally and
          as a way to document my thoughts and opinions as I have gone out into the "real world" during my time following being out of school
        </div>
      </div>
      <div>

      </div>
      <div id="content" className="mt-12 mb-5 w-4/5 space-y-20 text-left">
        {articlelistjson.map((art, index) => (
          // Need to retrieve Post so it will be art.post
          <Article
            key = {index}
            article_url= {art.post.mediumUrl}
            title={art.post.title}
            subtitle={art.post.previewContent.subtitle}
            datePub={new Date(art.post.firstPublishedAt).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
}
