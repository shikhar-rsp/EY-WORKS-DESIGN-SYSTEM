import 'package:flutter/material.dart';

class SidebarEllieCta extends StatelessWidget {
  const SidebarEllieCta({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24), // --space-300
      child: Wrap(
        spacing: 24,
        runSpacing: 24,
        children: const [
          _EllieCTACard(isHovered: false),
          _EllieCTACard(isHovered: true),
        ],
      ),
    );
  }
}

class _EllieCTACard extends StatelessWidget {
  final bool isHovered;

  const _EllieCTACard({required this.isHovered});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 218,
          height: 156,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: const LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xFFF8785E), // --primary
                Color(0xFFF472B6), // pink
                Color(0xFFA78BFA), // purple
              ],
              stops: [0.0, 0.5, 1.0],
            ),
          ),
          padding: const EdgeInsets.all(10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Ellie',
                    style: const TextStyle(
                      fontFamily: 'Abel',
                      fontSize: 18,
                      color: Color(0xFFFFFFFF), // --primary-foreground
                      letterSpacing: 0.43,
                    ),
                  ),
                  const SizedBox(height: 4),
                  const Text(
                    'How can I help you today?',
                    style: TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      height: 24 / 20,
                      color: Color(0xFFFFFFFF), // --primary-foreground
                    ),
                  ),
                ],
              ),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: isHovered
                      ? const Color(0xFFF8785E) // --primary
                      : const Color(0xFFFFFFFF), // --background
                  foregroundColor: isHovered
                      ? const Color(0xFFFFFFFF) // --primary-foreground
                      : const Color(0xFF7A7272), // --muted-foreground
                  elevation: 0,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8), // --radius-medium
                  ),
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4), // --space-200
                  textStyle: const TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                  minimumSize: const Size(0, 28),
                ),
                child: const Text('Button'),
              ),
            ],
          ),
        ),
        const SizedBox(height: 8),
        Text(
          isHovered ? 'Hovered' : 'Default',
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
      ],
    );
  }
}
