import 'package:flutter/material.dart';

class HoverCardDefault extends StatefulWidget {
  const HoverCardDefault({super.key});

  @override
  State<HoverCardDefault> createState() => _HoverCardDefaultState();
}

class _HoverCardDefaultState extends State<HoverCardDefault> {
  final LayerLink _layerLink = LayerLink();
  OverlayEntry? _overlayEntry;

  void _showCard() {
    _overlayEntry = OverlayEntry(
      builder: (context) => Positioned(
        width: 256,
        child: CompositedTransformFollower(
          link: _layerLink,
          showWhenUnlinked: false,
          offset: const Offset(0, 28),
          child: Material(
            elevation: 8,
            borderRadius: BorderRadius.circular(16), // --radius-large
            child: Container(
              padding: const EdgeInsets.all(16), // --space-200
              decoration: BoxDecoration(
                color: const Color(0xFFFFFFFF), // --background
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFEBE9E8)), // --border
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Row(
                    children: [
                      CircleAvatar(radius: 20, backgroundColor: const Color(0xFFFAFAFA)), // --muted
                      const SizedBox(width: 12),
                      const Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Next.js', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xFF2E2B2B))),
                          Text('@nextjs', style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272))),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  const Text('The React framework for the web. Used by some of the world\'s largest companies.', style: TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF505258))),
                  const SizedBox(height: 8),
                  const Text('Joined December 2021', style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272))),
                ],
              ),
            ),
          ),
        ),
      ),
    );
    Overlay.of(context).insert(_overlayEntry!);
  }

  void _hideCard() {
    _overlayEntry?.remove();
    _overlayEntry = null;
  }

  @override
  Widget build(BuildContext context) {
    return CompositedTransformTarget(
      link: _layerLink,
      child: MouseRegion(
        onEnter: (_) => _showCard(),
        onExit: (_) => _hideCard(),
        child: const Text(
          '@nextjs',
          style: TextStyle(
            fontFamily: 'Lexend',
            fontSize: 14,
            fontWeight: FontWeight.w500,
            color: Color(0xFFF8785E), // --primary
            decoration: TextDecoration.underline,
            decorationColor: Color(0xFFF8785E),
          ),
        ),
      ),
    );
  }
}
