"use client";

import { AppRoot, List, Section, Cell, Input, IconContainer } from '@telegram-apps/telegram-ui';// Adjust as necessary
import React, {useEffect } from 'react';

const TelegramApp = () => {

  const [theme, setTheme] = useState(
    {
      bg_color,
      text_color,
      hint_color,
      link_color,
      button_color,
      button_text_color,
      secondary_bg_color,
      header_bg_color,
      bottom_bar_bg_color,
      accent_text_color,
      section_bg_color,
      section_header_text_color,
      subtitle_text_color,
      destructive_text_color,
    }
  );

  useEffect(() => {
    // Load the Telegram Web App JavaScript SDK
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js?2";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        const themeParams = window.Telegram.WebApp.themeParams;
        setTheme(themeParams);
      } else {
        console.error("Telegram Web App API not loaded");
      } // Adjust timeout as necessary


    };



    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <>
      
      <AppRoot>
      <div className="w-screen">
        <Section header="Main Settings">
        <div>
          <p>section_bg Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.section_bg_color }}>Lorem</div></p>
          <p>Background Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.bg_color }}>Lorem</div></p>
          <p>Text Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.text_color }}>Lorem</div></p>
          <p>Hint Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.hint_color }}>Lorem</div></p>
          <p>link  Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.link_color }}>Lorem</div></p>
          <p>button Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.button_color }}>Lorem</div></p>
          <p>button text Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.button_text_color }}>Lorem</div></p>
          <p>secondary bg Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.secondary_bg_color }}>Lorem</div></p>
          <p>header bg Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.header_bg_color }}>Lorem</div></p>
          <p>bottom bar Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.bottom_bar_bg_color }}>Lorem</div></p>
          <p>accecnt text Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.accent_text_color }}>Lorem</div></p>
          <p>section_header text Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.section_header_text_color }}>Lorem</div></p>
          <p>subtitle text Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.subtitle_text_color }}>Lorem</div></p>
          <p>desctructive text Color: <div style={{ 'padding': '15px', 'backgroundColor': theme.destructive_text_color }}>Lorem</div></p>
          <h2>{userData.firstName} {userData.lastName}</h2>
          <p>Username: @{userData.username}</p>
          <p>User ID: {userData.userId}</p> {/* Display user ID */}

        </div>
        </Section>
        <List
          style={{
            background: 'var(--tgui--secondary_bg_color)',
            padding: '40px',
           
          }}
        >
         
          <Section
            footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
            header="Main Settings"
          >
            <Cell before={<IconContainer>1</IconContainer>}>
              Chat Settings
            </Cell>
            <Cell before={<IconContainer>2</IconContainer>}>
              Data and Storage
            </Cell>
            <Cell before={<IconContainer>3</IconContainer>}>
              Devices
            </Cell>
          </Section>
          <Section
            footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
            header="Personal Information"
          >
            <Input
              header="First name"
              placeholder="21 y.o. designer from San Francisco"
            />
            <Input
              header="Last name"
              placeholder="21 y.o. designer from San Francisco"
            />
          </Section>
        </List>
        </div>
      </AppRoot>
    </>
  );
};


export default TelegramApp;