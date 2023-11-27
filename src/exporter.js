import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Vintage from "./pages/Vintage";
import Layout from "./layout/layout";
import "./App.css";
import SwitchMenu from "./components/SwitchMenu";
import Footer from "./components/Footer";
import Carrousell from "./components/Carrousell";

export {
  Router,
  Routes,
  Route,
  useState,
  useEffect,
  Vintage,
  Layout,
  SwitchMenu,
  Footer,
  Carrousell,
  useNavigate,
};
