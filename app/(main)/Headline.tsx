'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { Avatar } from '~/components/Avatar'
import { SocialLink } from '~/components/links/SocialLink'

export function Headline() {
  return (
    <div className="max-w-6xl">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        {/* 左侧文字内容 */}
        <div className="lg:pl-0 lg:order-first lg:row-span-2">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 100,
              duration: 0.3,
            }}
          >
            Hi🙋，this is LuoFan
          </motion.h1>
          <motion.p
            className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 85,
              duration: 0.3,
              delay: 0.1,
            }}
          >
            <Balancer>
              I'm LuoFan, currently studying in Singapore, passionate about programming and technology innovation.<br />
              I like to explore new technologies, build interesting projects, and share my learning experiences and technical insights through blogs.<br />
              Here I record my growth trajectory, hoping to communicate and learn with more like-minded friends.
            </Balancer>
          </motion.p>
          <motion.div
            className="mt-6 flex gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 50,
              stiffness: 90,
              duration: 0.35,
              delay: 0.25,
            }}
          >
            <SocialLink
              href="https://github.com/luofanlf"
              aria-label="My GitHub"
              platform="github"
            />
            <SocialLink
              href="luofan036@gmail.com"
              aria-label="My Email"
              platform="mail"
            />
          </motion.div>
        </div>

        {/* 右侧头像 */}
        <div className="lg:pl-20">
          <motion.div
            className="max-w-xs px-2.5 lg:max-w-none relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 100,
              duration: 0.4,
              delay: 0.2,
            }}
          >
            <Avatar.Profile 
              width={280}
              height={280}
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              showSecondImage={true}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
