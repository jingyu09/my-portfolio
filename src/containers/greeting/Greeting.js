import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import TypingText from "../../components/typingText/TypingText";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                Hi all, I&apos;m {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              {greeting.roles && (
                <TypingText
                  lines={greeting.roles}
                  color={theme.imageHighlight}
                />
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
