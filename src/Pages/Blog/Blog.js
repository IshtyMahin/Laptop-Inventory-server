import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="border m-3 p-3">
        <h2>Authentication vs Authorization</h2>
        <p>
          authentication হল কেউ বা কিছু কিনা তা নির্ধারণ করার প্রক্রিয়া,
          প্রকৃতপক্ষে, কে বা কী বলে এটি। authentication প্রযুক্তি অনুমোদিত
          ব্যবহারকারীদের একটি ডাটাবেসে বা একটি ডেটা authentication সার্ভারে
          ব্যবহারকারীর credentials , credentials সাথে মেলে কিনা তা পরীক্ষা করে
          সিস্টেমগুলির জন্য অ্যাক্সেস নিয়ন্ত্রণ সরবরাহ করে৷ এটি করার সময়,
          প্রমাণীকরণ সুরক্ষিত সিস্টেম, নিরাপদ প্রক্রিয়া এবং এন্টারপ্রাইজ তথ্য
          নিরাপত্তা নিশ্চিত করে।
        </p>
        <p>
          অন্যদিকে Authorization হল resources অ্যাক্সেসের অধিকার/সুবিধাগুলি
          নির্দিষ্ট করার ফাংশন, যা সাধারণ তথ্য সুরক্ষা এবং কম্পিউটার নিরাপত্তার
          সাথে সম্পর্কিত এবং বিশেষ করে অ্যাক্সেস নিয়ন্ত্রণের সাথে সম্পর্কিত।
        </p>
      </div>
      <div className="border m-3 p-3">
        <h2>
          What other services does firebase provide other than authentication?
        </h2>
        <p>
          There are many services which Firebase provides, Most useful of them
          are: <br />
          1.Cloud Firestore <br />
          2.Cloud Functions <br />
          3. Hosting <br />
          4.Cloud Storage<br />
          5. Google Analytics <br />
          6.Predictions<br />
          7. Cloud Messaging <br />
          8. Dynamic Links<br />
          9. Remote Config etc.
        </p>
      </div>
    </div>
  );
};

export default Blog;
