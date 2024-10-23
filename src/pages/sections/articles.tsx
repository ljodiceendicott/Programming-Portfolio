import Header from "~/pages/components/Header";

import articlelist from "../combined_article.json";
import Article from "../components/article";

export default function articles() {

const articlelistjson = articlelist.data.viewer.latestPostsConnection.postPreviews;

const unixtext = 1709699255403;
let time = new Date(unixtext);

  return (
    <div>
      <Header />
      <div id="content" className="mt-12 w-1/2 space-y-20 text-left">
        {/* This will need to use map as there will be multiple articles that this is pulling from*/}
        {/* <Article 
        article_url=""
        title="Test Article"
        subtitle="this is a test"
        datePub= {time.toLocaleDateString()}
              /> */}
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
