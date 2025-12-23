export function AlkushMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 557 381"
      fill="none"
      {...props}
    >
      <rect x="46" y="113.369" width="57.089" height="211.351" fill="currentColor" />
      <rect x="293.791" y="113.369" width="57.089" height="211.351" fill="currentColor" />
      <rect x="205.12" y="113.369" width="57.089" height="211.351" fill="currentColor" />
      <rect x="452.911" y="113.369" width="57.089" height="76.5236" fill="currentColor" />
      <rect x="75.1518" y="246.982" width="57.089" height="163.979" transform="rotate(-90 75.1518 246.982)" fill="currentColor" />
      <rect x="322.942" y="246.982" width="57.089" height="129.969" transform="rotate(-90 322.942 246.982)" fill="currentColor" />
      <rect x="103.089" y="113.369" width="57.089" height="102.031" transform="rotate(-90 103.089 113.369)" fill="currentColor" />
      <rect x="293.791" y="113.369" width="57.089" height="159.12" transform="rotate(-90 293.791 113.369)" fill="currentColor" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
