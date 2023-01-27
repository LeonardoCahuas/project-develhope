
import "./index.css"

function TextInputs() {
  return (
    <div class="align-center max-w-sm p-10 border-2 rounded border-blue-200 w-fit">
      <h4 class="text-center text-2xl">Text Inputs</h4>
        <div class="mt-8 bg-blue-200 p-4">
			<input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
		</div>

        <div class="mt-8 bg-blue-900 p-4">
			<input class="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Search by username"/>
		</div>
      
    </div>
  );
}

export default TextInputs;