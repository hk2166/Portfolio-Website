import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 max-w-7xl mx-auto w-full relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
        Days I Code
      </h2>
      <div className="p-6 bg-black/50 border border-neutral-800 rounded-xl backdrop-blur-md overflow-x-auto w-full flex justify-center">
        <div className="min-w-fit">
          <GitHubCalendar
            username="hk2166" // Change 'octocat' to your actual GitHub username!
            colorScheme="dark"
            blockSize={14}
            blockMargin={4}
            fontSize={16}
            theme={{
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-400">
        Update{" "}
        <code className="bg-neutral-800 px-1 rounded">username="octocat"</code>{" "}
        in{" "}
        <code className="bg-neutral-800 px-1 rounded">
          src/components/GithubActivity.jsx
        </code>{" "}
        to your actual GitHub username.
      </p>
    </div>
  );
};

export default GithubActivity;
