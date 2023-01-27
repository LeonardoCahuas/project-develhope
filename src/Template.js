
import "./index.css"
const user = require('./user.png');
function Template() {
  return (
    <div class="align-center max-w-sm p-10 border-2 rounded border-blue-200 w-fit">
      <h1 class="text-center text-2xl">Chat Menu Template</h1>
        <button class="w-full text-left py-2 mt-8 border-b-2 border-blue-200">
            <div class="flex items-center">
                <img class="rounded-full items-start flex-shrink-0 mr-3" src={user} width="32" height="32" />
                    <div>
                    <h4 class="text-sm font-semibold text-white-900">Chat Name</h4>
                        <div class="text-[13px]">Lorem ipsum dolor sit amet...</div>
                    </div>
            </div>
        </button>
        <button class="mt-8 inline-flex items-center text-sm font-medium text-white bg-fuchsia-500 hover:bg-fuchsia-900 rounded-full text-center px-3 py-4 shadow-lg">
                
                <span>New Chat</span>
            </button>
    </div>
  );
}

export default Template;
