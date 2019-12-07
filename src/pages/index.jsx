import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { PageWrapper } from "../components/PageWrapper";
import authorization from "../utils/token";

const token = authorization;

const Index = () => {
  const [idolList, setIdolList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const graphql = await postData("https://graphql.fauna.com/graphql", {
          query: `query FindAllIdols {
                allIdols {
                  data {
                    _id
                    id
                    nameKana
                    nameKanji
                    url
                    isAdult
                }
            }
          }`,
          operationName: "FindAllIdols"
        });
        setIdolList(graphql.data.allIdols.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <Layout>
      <PageWrapper>
        {idolList.map(data => {
          return (
            <div key={data._id} className="card">
              <img alt={data.id} src={data.url} className="idolimg" />
              <div className="title">{data.nameKanji}</div>
              <div className="subtitle">{data.nameKana}</div>
            </div>
          );
        })}
      </PageWrapper>
      <style jsx>{`
        .card {
          margin: 16px;
          border: 2px solid salmon;
          border-radius: 8px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .idolimg {
          border-radius: 8px;
          width: 270px;
        }
        .title {
          font-size: 24px;
        }
        .subtitle {
          font-siz  16px;
        }
        .card:hover {
          cursor: pointer;
          background-color: salmon;
        }
      `}</style>
    </Layout>
  );
};

async function postData(url, query) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization: token },
    body: JSON.stringify(query)
  });
  return await response.json();
}

export default Index;
