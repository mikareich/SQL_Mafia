import Chat from "./chat";
import StoryContextProvider from "./context";
import Controls from "./controls";

export default function StoryView() {
  return (
    <StoryContextProvider>
      <div className="grid grid-rows-[1fr_auto]">
        <Chat />
        <Controls />
      </div>
    </StoryContextProvider>
  );
}
