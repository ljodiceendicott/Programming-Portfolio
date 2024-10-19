

// fetch("https://medium.com/_/graphql", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9,de;q=0.8",
//     "apollographql-client-name": "lite",
//     "apollographql-client-version": "main-20241017-182126-a0128a89d2",
//     "content-type": "application/json",
//     "graphql-operation": "YourStoriesQuery",
//     "medium-frontend-app": "lite/main-20241017-182126-a0128a89d2",
//     "medium-frontend-path": "/me/stories/public",
//     "medium-frontend-route": "stories",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "_cfuvid=sm1GbWHvY66OPGv.Bu0MDgEdknncafHZUf7pXzef7Wo-1729209071463-0.0.1.1-604800000; cf_clearance=YfZFeotsQqsvS2Ge2mM7jpGzWERhnU67Sotw6FyKVJY-1729209074-1.2.1.1-twaa5_.9t_upDZkAsI7tlQc.bcOW4h2HMf_tKi8fUVo7mHnF9MVsXo_It6.RNpUSZuagUkmT9nPFgnFpsCr58aQWejfZah2uhw05ol0Y.KJpleqnTbpymJ54v8Y9FDFBa1QfGjhxuHrB7G_DmBUDOrGeHDCJWQDM6ZWe3rpfU8.2DBhoPKWA7.iPHO0nWf01VkuHZHoXTMUZfhy6yOSPedugFM9KBEWsLXq8Ky7.KHvVH.oK6Dsg5So6AHcCxI15SA3a22sgcPXmGX_4wyuezI6_RFi_Iub2tB5IYXUpTjqIDtHxFyKGsh95A_gvzXo5cp8nZhRBd2jp8hjjfu_l5jN_VTWxQ3FaE_XweXAizq1vim.WHnjcxICeqWc1Bs0T; nonce=gUIz56qf; _gid=GA1.2.1413543501.1729209244; sz=1349; pr=1; tz=240; uid=40bcb1bbdc51; sid=1:OFMo7df1AfBorlXYZNyP1uF2dTNhCH9BSSX+046OryUxWSRzy/ezf3p6DBhqIBHc; xsrf=WmecKLHLRVSg3Q7-; _ga=GA1.1.268951731.1729209220; _dd_s=rum=0&expire=1729210282933; _ga_7JY7T788PK=GS1.1.1729209219.1.1.1729209384.0.0.0",
//     "Referer": "https://medium.com/me/stories/public",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "[{\"operationName\":\"YourStoriesQuery\",\"variables\":{\"type\":\"POST_TYPE_PUBLISHED\",\"includeResponses\":false,\"includeSuspended\":true,\"includeDeleted\":false,\"pagingOptions\":{\"limit\":5,\"to\":\"1711769533909\"}},\"query\":\"query YourStoriesQuery($type: PostType, $includeResponses: Boolean, $includeSuspended: Boolean, $includeDeleted: Boolean, $pagingOptions: PagingOptions) {\\n  viewer {\\n    id\\n    latestPostsConnection(\\n      type: $type\\n      includeResponses: $includeResponses\\n      includeSuspended: $includeSuspended\\n      includeDeleted: $includeDeleted\\n      paging: $pagingOptions\\n    ) {\\n      postPreviews {\\n        ...YourStoriesList_postPreview\\n        __typename\\n      }\\n      pagingInfo {\\n        next {\\n          limit\\n          to\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment YourStoriesList_postPreview on PostPreview {\\n  ...YourStoryRow_postPreview\\n  __typename\\n}\\n\\nfragment YourStoryRow_postPreview on PostPreview {\\n  postId\\n  post {\\n    creator {\\n      id\\n      __typename\\n    }\\n    isPublished\\n    visibility\\n    ...PostListingItemPreview_post\\n    ...PostListingPublishedAt_post\\n    ...PostListingReadingTime_post\\n    ...PostListingCollection_post\\n    ...PostListingUnlisted_post\\n    ...PostListingUnpublishedChanges_post\\n    ...PostListingUpdatedAt_post\\n    ...PostListingWordCount_post\\n    ...Star_post\\n    ...YourStoryActions_post\\n    ...usePostUrl_post\\n    ...PostSharePopover_post\\n    __typename\\n    id\\n  }\\n  __typename\\n}\\n\\nfragment PostListingItemPreview_post on Post {\\n  id\\n  mediumUrl\\n  title\\n  previewContent {\\n    subtitle\\n    isFullContent\\n    __typename\\n  }\\n  isPublished\\n  creator {\\n    id\\n    __typename\\n  }\\n  ...usePostUrl_post\\n  __typename\\n}\\n\\nfragment usePostUrl_post on Post {\\n  id\\n  creator {\\n    ...userUrl_user\\n    __typename\\n    id\\n  }\\n  collection {\\n    id\\n    domain\\n    slug\\n    __typename\\n  }\\n  isSeries\\n  mediumUrl\\n  sequence {\\n    slug\\n    __typename\\n  }\\n  uniqueSlug\\n  __typename\\n}\\n\\nfragment userUrl_user on User {\\n  __typename\\n  id\\n  customDomainState {\\n    live {\\n      domain\\n      __typename\\n    }\\n    __typename\\n  }\\n  hasSubdomain\\n  username\\n}\\n\\nfragment PostListingPublishedAt_post on Post {\\n  firstPublishedAt\\n  latestPublishedAt\\n  __typename\\n  id\\n}\\n\\nfragment PostListingReadingTime_post on Post {\\n  readingTime\\n  __typename\\n  id\\n}\\n\\nfragment PostListingCollection_post on Post {\\n  statusForCollection\\n  collection {\\n    id\\n    name\\n    slug\\n    ...collectionUrl_collection\\n    __typename\\n  }\\n  __typename\\n  id\\n}\\n\\nfragment collectionUrl_collection on Collection {\\n  id\\n  domain\\n  slug\\n  __typename\\n}\\n\\nfragment PostListingUnlisted_post on Post {\\n  visibility\\n  __typename\\n  id\\n}\\n\\nfragment PostListingUnpublishedChanges_post on Post {\\n  hasUnpublishedEdits\\n  __typename\\n  id\\n}\\n\\nfragment PostListingUpdatedAt_post on Post {\\n  readingTime\\n  updatedAt\\n  __typename\\n  id\\n}\\n\\nfragment PostListingWordCount_post on Post {\\n  wordCount\\n  __typename\\n  id\\n}\\n\\nfragment Star_post on Post {\\n  id\\n  creator {\\n    id\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment YourStoryActions_post on Post {\\n  id\\n  isPublished\\n  responseDistribution\\n  title\\n  ...YourStoryActionsPopoverMenu_post\\n  __typename\\n}\\n\\nfragment YourStoryActionsPopoverMenu_post on Post {\\n  id\\n  firstPublishedAt\\n  title\\n  deletedAt\\n  visibility\\n  inResponseToPostResult {\\n    __typename\\n  }\\n  inResponseToCatalogResult {\\n    __typename\\n  }\\n  ...NewsletterV3EmailToSubscribersMenuItem_post\\n  __typename\\n}\\n\\nfragment NewsletterV3EmailToSubscribersMenuItem_post on Post {\\n  id\\n  creator {\\n    id\\n    newsletterV3 {\\n      id\\n      subscribersCount\\n      __typename\\n    }\\n    __typename\\n  }\\n  isNewsletter\\n  isAuthorNewsletter\\n  __typename\\n}\\n\\nfragment PostSharePopover_post on Post {\\n  id\\n  mediumUrl\\n  title\\n  isPublished\\n  isLocked\\n  ...usePostUrl_post\\n  ...FriendLink_post\\n  __typename\\n}\\n\\nfragment FriendLink_post on Post {\\n  id\\n  ...SusiClickable_post\\n  ...useCopyFriendLink_post\\n  ...UpsellClickable_post\\n  __typename\\n}\\n\\nfragment SusiClickable_post on Post {\\n  id\\n  mediumUrl\\n  ...SusiContainer_post\\n  __typename\\n}\\n\\nfragment SusiContainer_post on Post {\\n  id\\n  __typename\\n}\\n\\nfragment useCopyFriendLink_post on Post {\\n  ...usePostUrl_post\\n  __typename\\n  id\\n}\\n\\nfragment UpsellClickable_post on Post {\\n  id\\n  collection {\\n    id\\n    __typename\\n  }\\n  sequence {\\n    sequenceId\\n    __typename\\n  }\\n  creator {\\n    id\\n    __typename\\n  }\\n  __typename\\n}\\n\"}]",
//   "method": "POST"
// });

// const puppeteer = require('puppeteer');

// async function scrapeMediumPrivateStories() {
//     const browser = await puppeteer.launch({ headless: false }); // Use headless: false to see the browser actions
//     const page = await browser.newPage();

//     // Go to Medium login page
//     await page.goto('https://medium.com/m/signin', { waitUntil: 'networkidle2' });

//     // Medium provides multiple login options; here, you can either:
//     // - Use Email login, or
//     // - Use Google/Facebook login (requires manual interaction)
    
//     // Example: Input the email for login (Manual interaction for Google or Facebook is required)
//     await page.type('input[type="email"]', 'jodiceluke@gmail.com');
//     await page.click('button'); // Click the "Continue" button after typing the email
    
//     // Wait for the next page (password or other form) to load
//     await page.waitForTimeout(5000); // Adjust timeout if necessary for loading

//     // After manually logging in (or adding further automation for the login process),
//     // navigate to the page that contains your published stories
//     await page.goto('https://medium.com/me/stories/public', { waitUntil: 'networkidle2' });

//     // Extract the article names from the private stories page
//     const articles = await page.evaluate(() => {
//         const articleElements = document.querySelectorAll('h2'); // Medium typically uses <h2> for article titles
//         const articlesData = [];

//         articleElements.forEach(element => {
//             const title = element.innerText.trim();
//             if (title) {
//                 articlesData.push({ title });
//             }
//         });

//         return articlesData;
//     });

//     console.log(articles);  // Display the extracted article names

//     await browser.close();
// }

// scrapeMediumPrivateStories();
