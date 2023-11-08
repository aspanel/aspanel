'use client'
import { useEffect, useState, FC, ImgHTMLAttributes, DetailedHTMLProps } from 'react';
import NextImage from 'next/image'
import { ImgProps } from 'next/dist/shared/lib/get-img-props';

interface ImageProps
    extends DetailedHTMLProps<
        ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    src: string;
    alt?: string;
}

const Image: FC<ImageProps> = ({ src, ...rest }) => {
    const [image, setImage] = useState(src);
    const handleFallback = () => {
        setImage("/placeHolder_image.png");
    }

    useEffect(() => {
        setImage(src);
    }, [src]);

    return (
        <NextImage src={image} {...rest} onError={() => handleFallback()} />
    )

}

export default Image;