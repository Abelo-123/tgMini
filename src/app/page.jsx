"use client";

import { AppRoot, List, Section, Cell, Input, IconContainer } from '@telegram-apps/telegram-ui';// Adjust as necessary
import React from 'react';

const TelegramApp = () => {


  return (
    <>
      
      <AppRoot>
      <div className="w-screen">
        <Section header="Main Settings">
        <div className="gap-2 place-items-center  w-screen h-auto grid grid-cols-3 p-4 bg-red-100">
                <div className='p-3  bg-red-300'>p</div>
                <div className='p-3 bg-red-300'>p</div>
                <div className='p-3 bg-red-300'>p</div>
                <div className='p-3 bg-red-300'>p</div>
                <div className='p-3  bg-red-300'>p</div>
                <div className='p-3  bg-red-300'>p</div>
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