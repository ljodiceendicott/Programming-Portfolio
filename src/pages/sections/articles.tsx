import Article from "~/pages/components/article";
import Header from "~/pages/components/Header";

import articlelist from "../combined_article.json";

export default function articles() {

const articles = articlelist.toString();

const unixtext = 1709699255403;
let time = new Date(unixtext);

  return (
    <div>
      <Header />
      <div id="content" className="mt-12 w-1/2 space-y-20 text-left">
        {/* New component for articles, May require refactoring of item card */}
        <Article 
        article_url=""
        title="Test Article"
        subtitle="this is a test"
        datePub= {time.toLocaleDateString()}
              />
      
      </div>
    </div>
  );
}
