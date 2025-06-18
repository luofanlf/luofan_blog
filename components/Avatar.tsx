import { type ComponentProps } from '@zolplay/react'
import { clsxm } from '@zolplay/utils'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import React from 'react'

// 替换成您自己的头像文件路径
import portraitImage from '~/assets/my-avatar.png'  // 将您的头像文件重命名为 my-avatar.png
import secondPortraitImage from '~/assets/my-avatar-2.png'  // 第二张照片，重命名为 my-avatar-2.png

function AvatarContainer({ className, ...props }: ComponentProps) {
  return (
    <div
      className={clsxm(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

type AvatarImageProps = ComponentProps &
  Omit<LinkProps, 'href'> & {
    large?: boolean
    extraLarge?: boolean
    href?: string
    alt?: boolean
  }
function AvatarImage({
  large = false,
  extraLarge = false,
  className,
  href,
  alt,
  ...props
}: AvatarImageProps) {
  // 根据尺寸设置不同的大小
  const getSize = () => {
    if (extraLarge) return { size: '6rem', className: 'h-24 w-24' }  // 96px x 96px
    if (large) return { size: '5rem', className: 'h-20 w-20' }       // 80px x 80px
    return { size: '2.25rem', className: 'h-9 w-9' }                // 36px x 36px
  }

  const { size, className: sizeClassName } = getSize()

  return (
    <Link
      aria-label="主页"
      className={clsxm(className, 'pointer-events-auto')}
      href={href ?? '/'}
      {...props}
    >
      <Image
        src={portraitImage}
        alt="LuoFan"
        sizes={size}
        className={clsxm(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          sizeClassName
        )}
        priority
      />
    </Link>
  )
}

// 新的首页头像组件，不使用圆形框，支持多张照片
function ProfileImage({ 
  className,
  width = 200,
  height = 200,
  showSecondImage = true,
  ...props 
}: ComponentProps & { 
  width?: number; 
  height?: number;
  showSecondImage?: boolean;
}) {
  const [isFirstImageFront, setIsFirstImageFront] = React.useState(false)

  const handleFirstImageClick = () => {
    setIsFirstImageFront(true)
  }

  const handleSecondImageClick = () => {
    setIsFirstImageFront(false)
  }

  return (
    <div className={clsxm('relative', className)} {...props}>
      {/* 主头像 */}
      <div 
        className={clsxm(
          'relative transition-all duration-300 ease-in-out',
          isFirstImageFront ? 'z-20 scale-100' : 'z-10 scale-95 opacity-80'
        )}
      >
        <Image
          src={portraitImage}
          alt="LuoFan"
          width={width}
          height={height}
          className="rounded-2xl object-cover shadow-lg ring-1 ring-zinc-900/5 dark:ring-white/10 hover:shadow-xl transition-all duration-300"
          priority
        />
      </div>
      
      {/* 第二张照片 - 稍微偏移并在后面 */}
      {showSecondImage && (
        <div 
          className={clsxm(
            'absolute -bottom-2 -right-2 transition-all duration-300 ease-in-out',
            !isFirstImageFront ? 'z-20 scale-100 opacity-100' : 'z-10 scale-95 opacity-80'
          )}
        >
          <Image
            src={secondPortraitImage}
            alt="LuoFan"
            width={width * 0.95}
            height={height * 0.95}
            className="rounded-2xl object-cover shadow-lg ring-1 ring-zinc-900/5 dark:ring-white/10 hover:shadow-xl transition-all duration-300"
          />
        </div>
      )}

      {/* 点击区域 - 独立的透明层 */}
      <div 
        className="absolute inset-0 cursor-pointer z-30"
        onClick={handleFirstImageClick}
        title="点击查看第一张照片"
      />
      
      {showSecondImage && (
        <div 
          className="absolute -bottom-2 -right-2 cursor-pointer z-30"
          onClick={handleSecondImageClick}
          title="点击查看第二张照片"
          style={{
            width: `${width * 0.95}px`,
            height: `${height * 0.95}px`,
          }}
        />
      )}
    </div>
  )
}

export const Avatar = Object.assign(AvatarContainer, { 
  Image: AvatarImage,
  Profile: ProfileImage
})
