"use client";
import Link from "next/link";
import "./globals.css";
import React from "react";
import { useState } from "react";
//import jpIMG from "./assets/jp.svg";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              {" "}
              Bem vindo a tela de Cadastro{" "}
            </span>

            <div className="wrap-input">
              <input
                className={username !== "" ? "has-val input" : "input"}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <span className="focus-input" data-placeholder="Username"></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastrar</button>
            </div>

            <div className="text-center">
              <span className="txt1">Possui uma conta? </span>
              <Link className="txt2" href={"/"} rel="noopener noreferrer">
                Logar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
