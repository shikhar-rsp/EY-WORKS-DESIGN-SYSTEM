import 'package:flutter/material.dart';

class SkeletonDefault extends StatefulWidget {
  const SkeletonDefault({super.key});

  @override
  State<SkeletonDefault> createState() => _SkeletonDefaultState();
}

class _SkeletonDefaultState extends State<SkeletonDefault>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);
    _animation = Tween<double>(begin: 1.0, end: 0.5).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Widget _bone({required double width, double height = 16}) {
    return FadeTransition(
      opacity: _animation,
      child: Container(
        width: width,
        height: height,
        decoration: BoxDecoration(
          color: const Color(0xFFFAFAFA), // --muted
          borderRadius: BorderRadius.circular(8), // --radius-medium
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _bone(width: 192),
        const SizedBox(height: 8),
        _bone(width: 154),
        const SizedBox(height: 8),
        _bone(width: 115),
      ],
    );
  }
}
