import "./index.css"

function Message() {
  return (
    <div  class="mt-20 border-2 rounded border-blue-200 w-fit">
      <div class=" max-w-sm rounded shadow-lg">
        <h4 class="text-center text-2xl">Messages</h4>
        <div class="p-10">
        <div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div>
          <p>incoming message</p>
					<div class="bg-fuchsia-900 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm text-blue-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					
				</div>
			</div>
      <div class="mt-20 flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
          <p>outgoing message</p>
					<div class="bg-blue-900 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm text-blue-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>					
				</div>
			</div>
         </div>

      </div>
    </div>
    )

}

export default Message;