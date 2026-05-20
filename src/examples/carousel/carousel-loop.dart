import 'package:flutter/material.dart';

class CarouselLoop extends StatefulWidget {
  const CarouselLoop({super.key});

  @override
  State<CarouselLoop> createState() => _CarouselLoopState();
}

class _CarouselLoopState extends State<CarouselLoop> {
  final _controller = PageController();
  int _current = 0;
  final List<String> _items = ['A', 'B', 'C'];

  void _prev() {
    final next = (_current - 1 + _items.length) % _items.length;
    setState(() => _current = next);
    _controller.animateToPage(next, duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
  }

  void _next() {
    final next = (_current + 1) % _items.length;
    setState(() => _current = next);
    _controller.animateToPage(next, duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 240,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          SizedBox(
            height: 200,
            child: PageView.builder(
              controller: _controller,
              itemCount: _items.length,
              onPageChanged: (i) => setState(() => _current = i),
              itemBuilder: (context, i) => Padding(
                padding: const EdgeInsets.only(left: 16),
                child: Container(
                  decoration: BoxDecoration(
                    color: const Color(0xFFF8785E), // --primary
                    borderRadius: BorderRadius.circular(16), // --radius-large
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    _items[i],
                    style: const TextStyle(
                      color: Color(0xFFFFFFFF), // --primary-foreground
                      fontSize: 30,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            left: -16,
            top: 0,
            bottom: 0,
            child: Center(
              child: _NavButton(onTap: _prev, icon: Icons.chevron_left),
            ),
          ),
          Positioned(
            right: -16,
            top: 0,
            bottom: 0,
            child: Center(
              child: _NavButton(onTap: _next, icon: Icons.chevron_right),
            ),
          ),
        ],
      ),
    );
  }
}

class _NavButton extends StatelessWidget {
  const _NavButton({required this.onTap, required this.icon});
  final VoidCallback onTap;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 32,
        height: 32,
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: const Color(0xFFEBE9E8)), // --border
          boxShadow: const [BoxShadow(color: Color(0x1A000000), blurRadius: 3)],
        ),
        child: Icon(icon, size: 16, color: const Color(0xFF2E2B2B)), // --foreground
      ),
    );
  }
}
