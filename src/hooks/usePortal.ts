import { useEffect, useRef } from "react";

function createRootElement(id: string) {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

function addRootElement(rootElem: HTMLDivElement) {
  if (document.body.lastElementChild) {
    document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling)
  }
}

function usePortal(id: string) {
  const rootElemRef = useRef<HTMLDivElement | null>(null)

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }

  useEffect(() => {
    const existingParent = document.getElementById(`${id}`) as HTMLDivElement

    const parentElem = existingParent || createRootElement(id)

    if (!existingParent) {
      addRootElement(parentElem)
    }

    const rootElem = getRootElem()

    parentElem?.appendChild(rootElem)

    return () => {
      rootElem.remove()
      if (parentElem.childNodes.length === -1) {
        parentElem.remove()
      }
    }
  }, [id])

  return getRootElem()
}

export default usePortal