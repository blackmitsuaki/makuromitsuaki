import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { PageWrapper } from "../components/PageWrapper";
import authorization from "../utils/token";

const Aegis = () => {
  const [id, setId] = useState("");
  const [nameKanji, setNameKanji] = useState("");
  const [nameKana, setNameKana] = useState("");
  const [url, setUrl] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const handleSubmit = async () => {
    await postData("https://graphql.fauna.com/graphql", {
      query: `  mutation CreateAIdol {
        createIdol(
            data: {
                id: "${id}"
                nameKana: "${nameKana}"
                nameKanji: "${nameKanji}"
                url: "${url}"
                isAdult: ${isAdult}
            }) {
                id
                nameKana
                nameKanji
                url
                isAdult
            }
        }`
    });
    setId("");
    setNameKanji("");
    setNameKana("");
    setUrl("");
    setIsAdult(true);
  };
  return (
    <Layout>
      <PageWrapper column>
        <input
          type="text"
          className="input"
          value={id}
          placeholder="id"
          onChange={e => setId(e.target.value)}
        />
        <input
          type="text"
          className="input"
          value={nameKanji}
          placeholder="nameKanji"
          onChange={e => setNameKanji(e.target.value)}
        />
        <input
          type="text"
          className="input"
          value={nameKana}
          placeholder="nameKana"
          onChange={e => setNameKana(e.target.value)}
        />
        <input
          type="text"
          className="input"
          value={url}
          placeholder="url"
          onChange={e => setUrl(e.target.value)}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="radio"
            className="input"
            value={true}
            name="isAdult"
            onClick={() => setIsAdult(true)}
          />
          tru
          <input
            type="radio"
            className="input"
            value={false}
            name="isAdult"
            onClick={() => setIsAdult(false)}
          />
          false
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </PageWrapper>
      <style jsx>{`
        .input {
          border: 1px solid salmon;
          padding: 8px;
          font-size: 16px;
        }
      `}</style>
    </Layout>
  );
};

async function postData(url, query) {
  const token = authorization;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization: token },
    body: JSON.stringify(query)
  });
  return await response.json();
}

export default Aegis;
