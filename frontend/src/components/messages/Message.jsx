const Message = () => {
    return(
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                alt="Tailwind css chat bubble compoment" 
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>HI What's app.</div>
        </div>

    )



}

export default Message
