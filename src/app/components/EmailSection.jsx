"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import axios from "axios";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSend, setIsEmailSend] = useState(false);

  const handleSubmitMsg = async (e) => {
    e.preventDefault();

    // 檢查是否有空白欄位
    if (!email || !subject || !message) {
      setIsEmailSend(false);
      console.log("請填寫完整資料！");
      return;
    }

    try {
      const res = await axios.post(
        "api/send",
        {
          subject: subject,
          bodyContent: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setEmail("");
        setSubject("");
        setMessage("");
        setIsEmailSend(true);
        console.log("訊息已成功發送！");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      {/* 左邊聯絡資訊 */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">聯絡資訊</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          我目前正在尋找新的工作機會，不論您有問題我都會盡力回覆您的訊息！歡迎與我聯絡！
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/samuel00410?tab=repositories"
            target="_blank"
          >
            <ImGithub className="w-8 h-8 text-white" />
          </Link>
          <Link href="https://www.instagram.com/samuel000410/" target="_blank">
            <GrInstagram className="w-8 h-8 text-white" />
          </Link>
        </div>
      </div>
      {/* 右邊輸入欄位 */}
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              您的信箱
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="您的電子信箱"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              主旨
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="主旨"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              訊息
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="說你想說的話..."
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmitMsg}
            className="bg-purple-500 hover:bg-purple-600 font-medium text-white py-2.5 px-5 w-full rounded-lg"
          >
            發送訊息
          </button>
          {isEmailSend ? (
            <p className="text-green-500 text-sm mt-2">訊息已成功發送！</p>
          ) : (
            <p className="text-red-500 text-sm mt-2">請填寫完整資料！</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
