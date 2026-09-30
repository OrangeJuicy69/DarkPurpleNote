import { useState, useRef, useEffect } from 'react'
import './basicnode.css'

const statusColors = {
  gesperrt: '#A32D2D',
  offen: '#BA7517',
  'in Arbeit': '#1727ba',
  abgenommen: '#1D9E75',
};

const DRAG_THRESHOLD = 4;

export const Node = ({ data, isSelected, onMove, onSelect, onResize }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState(data.position || { x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);

    const dragInfo = useRef({
        startX: 0, startY: 0, originX: 0, originY: 0,
        lastX: 0, lastY: 0, moved: false,
    });
    const nodeRef = useRef(null);

    useEffect(() => {
        const el = nodeRef.current;
        if (!el) return;

        const observer = new ResizeObserver(() => {
            const { offsetWidth, offsetHeight } = el;
            onResize(data.id, { width: offsetWidth, height: offsetHeight });
        });
        observer.observe(el);

        return () => observer.disconnect();
    }, [data.id]);

    const handlePointerDown = (e) => {
        dragInfo.current = {
            startX: e.clientX,
            startY: e.clientY,
            originX: position.x,
            originY: position.y,
            lastX: position.x,
            lastY: position.y,
            moved: false,
        };
        setIsDragging(true);
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
    };

    const handlePointerMove = (e) => {
        const dx = e.clientX - dragInfo.current.startX;
        const dy = e.clientY - dragInfo.current.startY;

        if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
            dragInfo.current.moved = true;
        }

        const x = dragInfo.current.originX + dx;
        const y = dragInfo.current.originY + dy;
        dragInfo.current.lastX = x;
        dragInfo.current.lastY = y;
        setPosition({ x, y });
        onMove(data.id, { x, y });
    };

    const handlePointerUp = () => {
        setIsDragging(false);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
    };

    const handleBodyClick = () => {
        if (dragInfo.current.moved) return;
        if (data.status === 'gesperrt') return;
        onSelect(data.id);
    };

    const handleChevronClick = (e) => {
        e.stopPropagation();
        if (data.status === 'gesperrt') return;
        setIsOpen(!isOpen);
    };

    return (
        <div
            ref={nodeRef}
            className={`node-div${isOpen ? ' open' : ''}${isDragging ? ' dragging' : ''}${isSelected ? ' selected' : ''}${data.status === 'gesperrt' ? ' locked' : ''}`}
            style={{ left: position.x, top: position.y }}
            onPointerDown={handlePointerDown}
            onClick={handleBodyClick}
        >
            <div className="node-pad">
                <span>{data.title}</span>
                <div className="node-status-dot" style={{ backgroundColor: statusColors[data.status] }} />
                <svg
                    className={`node-chevron${isOpen ? ' open' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    onClick={handleChevronClick}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>

            {!isOpen && (
                <div className="node-basic">
                    <div className="node-stufe-badge">Stufe {data.stufe}</div>
                </div>
            )}

            <div className={`node-detail-wrapper${isOpen ? ' open' : ''}`}>
                <div className="node-detail-inner">
                    <div className="node-detail">
                        <div className="node-row">
                            <span className="node-label">Stufe</span>
                            <div className="node-value">{data.stufe}</div>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Voraussetzungen</span>
                            <ul className="node-value">
                                {data.voraussetzungen.map((id) => (
                                    <li key={id}>{id}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Ziel</span>
                            <div className="node-value">{data.ziel}</div>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Deliverable</span>
                            <div className="node-value">{data.deliverable}</div>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Abnahme</span>
                            <ul className="node-value">
                                {data.abnahme.map((kriterium, i) => (
                                    <li key={i}>{kriterium}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Nachweis</span>
                            <div className="node-value">
                                {data.nachweis.datum}
                                {data.nachweis.commit && <> — <a href={data.nachweis.commit} target="_blank" rel="noreferrer">Commit</a></>}
                            </div>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Status</span>
                            <div className="node-value">{data.status}</div>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Reflexion</span>
                            <div className="node-value">{data.reflexion}</div>
                        </div>
                        <div className="node-row">
                            <span className="node-label">Bildungsplan</span>
                            <div className="node-value">{data.bildungsplan}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};