"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "./styles.css";

export default function Home() {
  const [emergencies, setEmergencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setFetchError(null);
      try {
        const { data, error } = await supabase
          .from("emergencies")
          .select("*")
          .eq("status", "Verified");

        if (error) {
          console.log("ERROR:", error);
          setFetchError(error.message || "unknown");
          setEmergencies([]);
        } else {
          console.log("DATA:", data);
          setEmergencies(data || []);
        }
      } catch (err) {
        console.error("fetch exception", err);
        setFetchError(err.message);
      } finally {
        setLoading(false);
      }
    }

    async function checkWallet() {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts && accounts.length) setAccount(accounts[0]);
          window.ethereum.on && window.ethereum.on("accountsChanged", (accounts) => {
            setAccount(accounts.length ? accounts[0] : null);
          });
        } catch (err) {
          console.error("wallet check error", err);
        }
      }
    }

    checkWallet();
    fetchData();
  }, []);

  async function connectWallet() {
    if (typeof window === "undefined") return;
    const { ethereum } = window;
    if (!ethereum) {
      window.open("https://metamask.io/download/", "_blank");
      return;
    }

    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      if (accounts && accounts.length) setAccount(accounts[0]);
    } catch (err) {
      console.error("connect error", err);
    }
  }

  return (
    <main>
      <div className="bg-3d">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      <div className="container">
        <header>
          <h1>Relief App 🚀</h1>
          <button
            onClick={connectWallet}
            className="connect-btn"
          >
            {account
              ? `${account.slice(0, 6)}...${account.slice(-4)}`
              : "Connect Wallet"}
          </button>
        </header>

        {emergencies.length > 0 ? (
          <>
            {/* debug list */}
            <div className="emergencies-grid">
            {emergencies.map((item) => (
              <div key={item.id} className="emergency-card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="target-amount">
                  Target: {item.target_amount} ETH
                </div>
                <button className="donate-btn">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
          </>
        ) : (
          <div className="empty-state">
            {loading ? (
              <p className="loading">Loading emergencies...</p>
            ) : fetchError ? (
              <p className="text-red-500">Error: {fetchError}</p>
            ) : (
              <p>No verified emergencies found. Check back soon!</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
