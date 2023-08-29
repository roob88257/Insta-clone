"use client"
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {PiShareFatBold} from 'react-icons/pi'
import {BsBookmark} from 'react-icons/bs'
import {BsEmojiSmile} from 'react-icons/bs'
import Button from '../UI/button'

const Post=()=>{
    return (
        <div className='flex flex-col max-h-100 border-gray-100'>
                   <div className='flex justify-between border border-gray-100 p-2'>
                    <div className='flex border-gray-100 space-x-2'>
                       <div className='rounded-full bg-black ring-2 ring-pink-400 ring-offset-2 w-6 h-6'/>
                       <div>Username</div>
                   </div>
                       <div className='w-5'><BsThreeDots/></div>
                   </div>
                   <div className='w-full h-full aspect-video bg-black'></div>
                   <div className='justify-between flex py-2 px-3'>
                        <div className='flex space-x-3'>
                            <div size={25}><AiOutlineHeart/></div>
                            <div size={25}><FaRegComment/></div>
                            <div size={25}><PiShareFatBold/></div>
                        </div>
                        <div size={25}><BsBookmark/></div>
                   </div>
                   <div className='px-2'>1000 Likes</div>
                   <div className='space-y-1'>
                   {
                new Array(3).fill(1).map((id)=>(
                    <div className='flex px-3 space-x-1'>
                         <p className='font-medium'>Username</p>
                         <p>Great Pics.</p>
                    </div>
                ))
                }
                   </div>
                   <div className='px-2 py-1'>3 Hours Ago</div>
                   <form onubmit={(e)=>(e.preventDefault())} className='flex space-x-3 py-2'>
                   <div className='flex flex-row space-x-3 w-full border-t border-gray-100'>
                    <div className='py-3'><BsEmojiSmile/></div>
                    <div className='w-full'>
                        <input
                        type='text'
                        placeholder='Write a Comment'
                        id=''
                        name=''
                        className='w-full py-2 outline-none '
                        />
                    </div>
                   <button className='text-blue-600 font-semibold py-2'>Post</button>
                   </div>
                   </form>
                </div>
    )

}

export default Post;
