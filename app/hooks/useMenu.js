"use client";

import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, close } from "../store/menuSlice";

export function useMenu() {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const toggleMenu = useCallback(() => dispatch(toggle()), [dispatch]);
  const closeMenu = useCallback(() => dispatch(close()), [dispatch]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { isOpen, toggleMenu, closeMenu, scrolled };
}
