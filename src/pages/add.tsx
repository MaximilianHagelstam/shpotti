import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import Layout from "../layout";

const Add: NextPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Title: ${title}`, `Description: ${description}`);
  };

  return (
    <Layout title="Add Spot">
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 focus:outline-indigo-500 focus:outline-2 text-gray-900 text-sm rounded-lg w-full p-2.5"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 focus:outline-indigo-500 focus:outline-2 text-gray-900 text-sm rounded-lg w-full p-2.5"
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Add;