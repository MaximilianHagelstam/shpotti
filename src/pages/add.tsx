import type { NextPage } from "next";
import Router from "next/router";
import { FormEvent, useState } from "react";
import Layout from "../layout";

const Add: NextPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await fetch("/api/spots/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      setLoading(false);
    } catch (err) {
      setError(true);
    }

    Router.push("/");
  };

  if (error) return <div>Error</div>;

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
          disabled={loading}
        >
          {loading ? "Loading..." : "Create"}
        </button>
      </form>
    </Layout>
  );
};

export default Add;
